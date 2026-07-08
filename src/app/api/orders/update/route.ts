import { NextResponse } from "next/server";
import { db } from "../../../../db/index";
import { orders, orderItems } from "../../../../db/schema";
import { eq } from "drizzle-orm";

export const runtime = 'edge';

export async function POST(request: Request) {
  try {
    const changes = await request.json(); 
    
    // Transaction για να μην γραφτεί μισή παραγγελία αν πέσει το ίντερνετ
    await db.transaction(async (tx) => {
        for (const change of changes) {
          
          // 1. ΔΙΑΓΡΑΦΗ (cascade deletes items automatically)
          if (change.isDeleted) {
            await tx.delete(orders).where(eq(orders.id, change.id));
          } 
          
          // 2. ΕΝΗΜΕΡΩΣΗ / ΝΕΑ ΠΑΡΑΓΓΕΛΙΑ
          else {
            // Βήμα Α: Κεντρικό Τραπέζι (Μπήκε το globalPaid!)
            await tx.insert(orders).values({
              id: change.id,
              tableId: change.tableId,
              status: change.status,
              paymentMode: change.paymentMode,
              globalPaymentMethod: change.globalPaymentMethod || "",
              globalReceipt: change.globalReceipt || false,
              globalPaid: change.globalPaid || false, // <--- ΝΕΟ
              updatedAt: new Date().toISOString()
            })
            .onConflictDoUpdate({
              target: orders.id, 
              set: {
                status: change.status,
                paymentMode: change.paymentMode,
                globalPaymentMethod: change.globalPaymentMethod || "",
                globalReceipt: change.globalReceipt || false,
                globalPaid: change.globalPaid || false, // <--- ΝΕΟ
                updatedAt: new Date().toISOString()
              }
            });

            // Βήμα Β: Σβήνουμε τα παλιά είδη
            await tx.delete(orderItems).where(eq(orderItems.orderId, change.id));

            // Βήμα Γ: Εισαγωγή των νέων ειδών (Μπήκε το isPaid!)
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
                isPaid: item.isPaid || false, // <--- ΝΕΟ
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