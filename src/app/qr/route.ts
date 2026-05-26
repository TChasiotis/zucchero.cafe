// src/app/qr/route.ts
import { redirect } from 'next/navigation';
import { NextRequest } from 'next/server';

export const dynamic = "force-static";

export async function GET(request: NextRequest) {
  /* ΕΔΩ ΕΙΝΑΙ ΟΛΗ Η ΜΑΓΕΙΑ!
    Όταν κάποιος σκανάρει το stand, ο browser του θα χτυπάει το: zucchero.gr/qr
    Αυτή η γραμμή θα τον "πετάει" ακαριαία στο /menu.
    Αν στο μέλλον αλλάξεις το URL του μενού, αλλάζεις ΜΟΝΟ αυτή τη λέξη εδώ πέρα!
  */
  redirect('/menu');
}