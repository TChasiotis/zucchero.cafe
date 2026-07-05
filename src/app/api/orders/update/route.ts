import { NextResponse } from "next/server";
import { db } from "../../../../db/index";
import { orders, orderItems } from "../../../../db/schema";
import { eq } from "drizzle-orm";

export const runtime = 'edge';

export async function POST(request: Request) {
  try {
    const changes = await request.json(); 
    
    // Στην Turso/Drizzle, χρησιμοποιούμε transaction για μαζικές αλλαγές.
    // Έτσι αν πέσει το ίντερνετ στη μέση, δεν θα γραφτεί μισή παραγγελία!
    await db.transaction(async (tx) => {
        for (const change of changes) {
          
          // 1. ΔΙΑΓΡΑΦΗ: Το τραπέζι πληρώθηκε ή ακυρώθηκε
          if (change.isDeleted) {
            // Λόγω του onDelete: "cascade" στο schema σου, σβήνοντας την παραγγελία 
            // η Turso σβήνει ΑΥΤΟΜΑΤΑ και τους 5 καφέδες που είχε μέσα!
            await tx.delete(orders).where(eq(orders.id, change.id));
          } 
          
          // 2. ΕΝΗΜΕΡΩΣΗ / ΝΕΑ ΠΑΡΑΓΓΕΛΙΑ
          else {
            // Βήμα Α: Αποθήκευση/Ενημέρωση του Κεντρικού Τραπεζιού
            await tx.insert(orders).values({
              id: change.id,
              tableId: change.tableId,
              status: change.status,
              paymentMode: change.paymentMode,
              globalPaymentMethod: change.globalPaymentMethod || "",
              globalReceipt: change.globalReceipt || false,
              updatedAt: new Date().toISOString()
            })
            .onConflictDoUpdate({
              target: orders.id, // Αν υπάρχει ήδη το ID, κάνε Update
              set: {
                status: change.status,
                paymentMode: change.paymentMode,
                globalPaymentMethod: change.globalPaymentMethod || "",
                globalReceipt: change.globalReceipt || false,
                updatedAt: new Date().toISOString()
              }
            });

            // Βήμα Β: Σβήνουμε όλα τα ΠΑΛΙΑ προϊόντα αυτού του τραπεζιού.
            // Γιατί; Γιατί είναι πιο γρήγορο να τα σβήσεις και να γράψεις τα νέα,
            // παρά να ελέγχεις ένα-ένα ποιος καφές διαγράφηκε και ποιος έμεινε!
            await tx.delete(orderItems).where(eq(orderItems.orderId, change.id));

            // Βήμα Γ: Εισαγωγή όλων των προϊόντων (της νέας λίστας)
            if (change.items && change.items.length > 0) {
              const itemsToInsert = change.items.map((item: any) => ({
                id: item.id,
                orderId: change.id,
                productId: item.productId,
                quantity: item.quantity,
                finalPrice: item.finalPrice,
                isServed: item.isServed || false,
                paymentMethod: item.paymentMethod || "",
                hasReceipt: item.hasReceipt || false,
                // Πακετάρουμε τις ζάχαρες/γάλατα σε JSON string
                customizations: typeof item.customizations === "string" 
                  ? item.customizations 
                  : JSON.stringify(item.customizations || {})
              }));

              await tx.insert(orderItems).values(itemsToInsert);
            }
          }
        }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Database update error on orders:", error);
    return NextResponse.json({ success: false, error: "Αποτυχία συγχρονισμού παραγγελιών" }, { status: 500 });
  }
}