import type { MetadataRoute } from 'next';
import { products } from '@/data/products';

/** Required by `output: 'export'` — without it the route is treated as dynamic
 *  and the build fails collecting page data. */
export const dynamic = 'force-static';

const BASE = 'https://khairwigs.com';

/** Static routes, most important first. Paths carry a trailing slash to match
 *  next.config's `trailingSlash: true` — otherwise every URL redirects. */
const staticRoutes: Array<{ path: string; priority: number }> = [
  { path: '/', priority: 1 },
  { path: '/collection/', priority: 0.9 },
  { path: '/custom-orders/', priority: 0.8 },
  { path: '/our-story/', priority: 0.7 },
  { path: '/contact/', priority: 0.7 },
  { path: '/faq/', priority: 0.6 },
  { path: '/measurement-guide/', priority: 0.6 },
  { path: '/care-guide/', priority: 0.5 },
  { path: '/shipping/', priority: 0.4 },
  { path: '/return-policy/', priority: 0.3 },
  { path: '/privacy/', priority: 0.2 },
  { path: '/terms/', priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticRoutes.map(({ path, priority }) => ({
      url: `${BASE}${path}`,
      changeFrequency: 'monthly' as const,
      priority,
    })),
    ...products.map((p) => ({
      url: `${BASE}/collection/${p.slug}/`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
}
