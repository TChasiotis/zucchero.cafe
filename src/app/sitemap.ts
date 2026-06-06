import { MetadataRoute } from 'next';
import { db } from '../db/index'; 
import { categories } from '../db/schema';

// Επιτρέπουμε στο sitemap να τρέχει στο Edge του Cloudflare
export const runtime = 'edge';
export const revalidate = 0; 

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Παίρνουμε δυναμικά τις κατηγορίες από τη βάση
  const dbCategories = await db.select().from(categories);

  // Οι σταθερές μας σελίδες
  const routes: MetadataRoute.Sitemap = [
    {
      url: 'https://zucchero.gr',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: 'https://zucchero.gr/menu',
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 0.9,
    },
    {
      url: 'https://zucchero.gr/qr',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];

  // Φτιάχνουμε δυναμικά links για κάθε κατηγορία αν θες να τα βλέπει η Google
  // (Π.χ. zucchero.gr/menu#popular)
  const dynamicCategories = dbCategories.map((cat) => ({
    url: `https://zucchero.gr/menu#${cat.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...routes, ...dynamicCategories];
}