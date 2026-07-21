'use client';

import { useState } from 'react';
import { categories, type Product, type ProductCategory } from '@/data/products';
import { ProductCard } from './ProductCard';

type Filter = ProductCategory | 'All';

export default function CollectionGrid({ products }: { products: Product[] }) {
  const [filter, setFilter] = useState<Filter>('All');

  const visible =
    filter === 'All' ? products : products.filter((p) => p.category === filter);

  return (
    <>
      <div className="sp-collhead">
        <div>
          <h2>
            Signature <em>Pieces</em>
          </h2>
          <p>Each style reflects a decade and a half of real-world testing and refinement.</p>
        </div>
        <div className="sp-filtbar" id="collFilters" role="group" aria-label="Filter by style">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              className={c === filter ? 'on' : undefined}
              data-f={c}
              onClick={() => setFilter(c)}
              aria-pressed={c === filter}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="sp-pgrid" id="collGrid">
        {visible.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>

      <p className="sp-count" aria-live="polite">
        {visible.length} {visible.length === 1 ? 'piece' : 'pieces'}
        {filter !== 'All' && ` · ${filter}`}
      </p>
    </>
  );
}
