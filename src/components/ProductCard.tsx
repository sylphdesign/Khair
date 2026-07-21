import Link from 'next/link';
import type { Product } from '@/data/products';

function ImagePlaceholder({ label }: { label: string }) {
  return (
    <div className="sp-iph">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="M21 15l-5-5L5 21" />
      </svg>
      <span>{label}</span>
    </div>
  );
}

function CardShell({
  product,
  className,
  children,
}: {
  product: Product;
  className: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={`/collection/${product.slug}`}
      className={className}
      data-cat={product.category}
    >
      {children}
    </Link>
  );
}

/** Compact card for the collection grid. */
export function ProductCard({ product }: { product: Product }) {
  const cover = product.images[0];
  return (
    <CardShell product={product} className="sp-pcard sp-rv">
      <div className="sp-pimg">
        {cover ? (
          <img src={cover.src} alt={cover.alt} loading="lazy" decoding="async" />
        ) : (
          <ImagePlaceholder label="Product" />
        )}
        {product.badge && <div className="sp-badge">{product.badge}</div>}
      </div>
      <div className="sp-pinfo">
        <h3>{product.name}</h3>
        <p>{product.specLine}</p>
        <p style={{ fontSize: '.75rem', color: 'var(--text-light)' }}>
          {product.constructionLine}
        </p>
      </div>
    </CardShell>
  );
}

/** Large hover-reveal card used in the homepage collection section. */
export function FeaturedProductCard({
  product,
  delay,
}: {
  product: Product;
  delay: number;
}) {
  const cover = product.images[0];
  return (
    <CardShell product={product} className={`collection-card reveal delay-${delay}`}>
      <div className="collection-card-image">
        {cover ? (
          <img src={cover.src} alt={cover.alt} loading="lazy" decoding="async" />
        ) : (
          <div className="collection-card-placeholder">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="M21 15l-5-5L5 21" />
            </svg>
            <span>Product Image</span>
          </div>
        )}
        <div className="collection-card-overlay"></div>
        <div className="collection-card-info">
          <h3>{product.name}</h3>
          <p>{product.specLine}</p>
        </div>
      </div>
      <div className="collection-card-bottom">
        <h3>{product.name}</h3>
        <p>{product.constructionLine}</p>
      </div>
    </CardShell>
  );
}
