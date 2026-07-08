import { NextResponse } from "next/server";
import { db } from "../../../db/index"; 
import { orders, orderItems } from "../../../db/schema";

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    // 1. Τραβάμε ΟΛΕΣ τις κεντρικές παραγγελίες (πλέον έρχεται αυτόματα και το globalPaid)
    const allOrders = await db.select().from(orders);
    
    // 2. Τραβάμε ΟΛΑ τα προϊόντα (πλέον έρχεται αυτόματα και το isPaid)
    const allOrderItems = await db.select().from(orderItems);

    // 3. Ενώνουμε τα προϊόντα (items) μέσα στο σωστό τραπέζι (order)
    const processedOrders = allOrders.map((order) => {
      const itemsForThisOrder = allOrderItems.filter(item => item.orderId === order.id);

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

    // ΣΤΕΛΝΟΥΜΕ ΑΠΑΝΤΗΣΗ ΜΕ ANTI-CACHE HEADERS
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