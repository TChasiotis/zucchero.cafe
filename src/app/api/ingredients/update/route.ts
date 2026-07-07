import { NextResponse } from "next/server";
import { db } from "../../../../db/index";
import { ingredients } from "../../../../db/schema";

export const runtime = 'edge';

export async function POST(request: Request) {
  try {
    const changes = await request.json(); // Δέχεται array από { id, name, category, isAvailable }
    
    await db.transaction(async (tx) => {
      for (const item of changes) {
        // Αν δεν υπάρχει το υλικό, το δημιουργεί. Αν υπάρχει, του αλλάζει τη διαθεσιμότητα.
        await tx.insert(ingredients).values({
          id: item.id,
          name: item.name,
          category: item.category,
          isAvailable: item.isAvailable
        }).onConflictDoUpdate({
          target: ingredients.id,
          set: { 
            isAvailable: item.isAvailable,
            // Προαιρετικά κάνουμε update και το όνομα/κατηγορία αν τα αλλάξεις στο μέλλον
            name: item.name,
            category: item.category 
          }
        });
      }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("API Error updating ingredients:", error);
    return NextResponse.json(
      { success: false, error: "Αποτυχία αποθήκευσης υλικών" }, 
      { status: 500 }
    );
  }
}