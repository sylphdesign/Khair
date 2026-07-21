import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { products, getProduct } from '@/data/products';
import ProductGallery from '@/components/ProductGallery';

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};

  const title = `${product.name} — ${product.specLine} | Khair Wigs`;
  const cover = product.images[0]?.src;

  return {
    title,
    description: product.tagline,
    keywords: [
      `${product.name} wig`,
      'hand-tied full lace wig',
      'European hair wig',
      'Scalp Simulation Technology',
      `${product.category.toLowerCase()} wig`,
    ],
    alternates: { canonical: `/collection/${product.slug}/` },
    openGraph: {
      title: `${product.name} — Hand-Tied Full Lace Wig`,
      description: product.tagline,
      ...(cover ? { images: [{ url: cover }] } : {}),
    },
    twitter: {
      title: `${product.name} | Khair Wigs`,
      description: product.tagline,
      ...(cover ? { images: [cover] } : {}),
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <div className="page-wrapper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: product.name,
            description: product.tagline,
            category: `${product.category} Wig`,
            image: product.images.map(
              (i) => `https://khairwigs.com${i.src}`,
            ),
            brand: { '@type': 'Brand', name: 'Khair Wigs' },
            url: `https://khairwigs.com/collection/${product.slug}/`,
            additionalProperty: product.specs.map((s) => ({
              '@type': 'PropertyValue',
              name: s.label,
              value: s.value,
            })),
          }),
        }}
      />

      <section className="sp-hero">
        <div className="hero-grain"></div>
        <div className="sp-hero-in">
          <p className="sp-bc">
            <Link href="/">Home</Link> &nbsp;/&nbsp;{' '}
            <Link href="/collection">Collection</Link> &nbsp;/&nbsp; {product.name}
          </p>
          <h1>{product.name}</h1>
          <p>{product.tagline}</p>
        </div>
      </section>

      <div className="sp-wide">
        <div className="pd-layout">
          <ProductGallery images={product.images} productName={product.name} />

          <div className="pd-detail sp-rv">
            <p className="pd-eyebrow">{product.category} · Hand-Tied</p>
            <h2 className="pd-title">{product.name}</h2>
            <p className="pd-spec">{product.specLine}</p>

            {product.highlights.length > 0 && (
              <ul className="pd-highlights">
                {product.highlights.map((h) => (
                  <li key={h.title}>
                    <h3>{h.title}</h3>
                    <p>{h.body}</p>
                  </li>
                ))}
              </ul>
            )}

            {product.specs.length > 0 && (
              <>
                <div className="sp-hr"></div>
                <h3 className="pd-subhead">Specifications</h3>
                <dl className="pd-specs">
                  {product.specs.map((s) => (
                    <div key={s.label}>
                      <dt>{s.label}</dt>
                      <dd>{s.value}</dd>
                    </div>
                  ))}
                </dl>
              </>
            )}

            <div className="pd-actions">
              <Link href="/contact" className="sp-btn">
                <span>Book a Consultation</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link href="/custom-orders" className="sp-btn2">
                Customize This Piece
              </Link>
            </div>
            <p className="pd-note">
              Every piece can be tailored — length, color, density, and cap
              dimensions. Pricing is shared during your private consultation.
            </p>
          </div>
        </div>

        <div style={{ marginTop: '70px' }} className="sp-rv">
          <Link href="/collection" className="sp-btn2">
            ← Back to Collection
          </Link>
        </div>
      </div>

      <div className="sp-cta">
        <div>
          <h2>
            Ready to See the <em>Difference?</em>
          </h2>
          <p>It starts with a private, no-pressure conversation.</p>
          <Link href="/contact" className="sp-btn">
            <span>Book a Free Consultation</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
