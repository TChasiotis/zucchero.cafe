import { NextResponse } from "next/server";
import { db } from "../../../db/index"; 
import { orders, orderItems } from "../../../db/schema";
import { asc } from "drizzle-orm"; 

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    // 1. Τραβάμε ΟΛΕΣ τις κεντρικές παραγγελίες και ΟΛΑ τα προϊόντα τους
    const allOrders = await db.select().from(orders);
    const allOrderItems = await db.select().from(orderItems);

    // 2. Ενώνουμε τα προϊόντα (items) μέσα στο σωστό τραπέζι (order)
    const processedOrders = allOrders.map((order) => {
      // Βρίσκουμε ποια αντικείμενα ανήκουν σε αυτή την παραγγελία
      const itemsForThisOrder = allOrderItems.filter(item => item.orderId === order.id);

      // Επαναφέρουμε το JSON των customizations (ζάχαρες, γάλατα κλπ) 
      const parsedItems = itemsForThisOrder.map(item => {
        let parsedCustomizations = {};
        if (item.customizations) {
          try {
            parsedCustomizations = typeof item.customizations === "string" 
              ? JSON.parse(item.customizations) 
              : item.customizations;
          } catch (e) {
            console.error("JSON parse error on order items");
          }
        }

        return { 
          ...item, 
          customizations: parsedCustomizations 
        };
      });

      return {
        ...order,
        items: parsedItems
      };
    });

    // 3. ΣΤΕΛΝΟΥΜΕ ΑΠΑΝΤΗΣΗ ΜΕ ANTI-CACHE HEADERS (Ακριβώς όπως το μενού)
    return NextResponse.json(
      { 
        success: true,
        orders: processedOrders 
      }, 
      { 
        status: 200,
        headers: {
          'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0',
        }
      }
    );
    
  } catch (error) {
    console.error("API Error fetching orders:", error);
    return NextResponse.json(
      { success: false, error: "Αποτυχία φόρτωσης παραγγελιών" }, 
      { status: 500 }
    );
  }
}