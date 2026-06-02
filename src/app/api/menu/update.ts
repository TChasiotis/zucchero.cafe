import { NextResponse } from "next/server";
import { db } from "../../../db/index";
import { menuItems } from "../../../db/schema";
import { eq } from "drizzle-orm";

export const runtime = 'edge';

export async function POST(request: Request) {
  try {
    const changes = await request.json(); // Εδώ έρχεται το array με τις αλλαγές
    
    // Κάνουμε loop κάθε αλλαγή και τη στέλνουμε στη βάση
    for (const change of changes) {
      await db.update(menuItems)
        .set({ 
          price: change.price,
          isSoldOut: change.isSoldOut,
          isPopular: change.isPopular 
        })
        .where(eq(menuItems.id, change.id));
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Αποτυχία ενημέρωσης" }, { status: 500 });
  }
}