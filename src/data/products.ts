export type ProductCategory = 'Straight' | 'Wavy' | 'Curly';

export interface ProductImage {
  src: string;
  alt: string;
}

export interface ProductHighlight {
  title: string;
  body: string;
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  slug: string;
  name: string;
  category: ProductCategory;
  /** Optional ribbon on the card image, e.g. "Signature", "New". */
  badge?: string;
  /** First card line — length, color, hair origin. */
  specLine: string;
  /** Second card line — cap and lace construction. */
  constructionLine: string;
  /** One sentence used as the detail-page lede and meta description. */
  tagline: string;
  highlights: ProductHighlight[];
  specs: ProductSpec[];
  images: ProductImage[];
}

export const products: Product[] = [
  {
    slug: 'alisha',
    name: 'Alisha',
    category: 'Straight',
    specLine: '18" · Color #4 Medium Reddish Brown · 100% European Hair',
    constructionLine: 'Full Lace · Scalp Simulation Technology™',
    tagline:
      'An 18" custom hand-tied full lace wig in silky straight European hair, with a 4" × 12" Scalp Simulation panel that parts naturally in any direction.',
    highlights: [
      {
        title: 'Scalp Simulation Technology™ Front to Back (4" × 12")',
        body: 'Create a natural part in any direction from front to back, for the appearance of hair growing directly from your scalp.',
      },
      {
        title: '100% European Hair',
        body: 'Silky straight in a rich #4 medium reddish/brown shade.',
      },
      {
        title: 'Fully Hand-Tied Pre-Cut Lace Construction',
        body: 'Lightweight, breathable, and made for realistic movement.',
      },
      {
        title: 'Small Cap',
        body: 'Includes built-in combs and an adjustable strap for a secure, comfortable fit.',
      },
    ],
    specs: [
      { label: 'Length', value: '18"' },
      { label: 'Color', value: '#4 Medium Reddish/Brown' },
      { label: 'Hair', value: '100% European' },
      { label: 'Texture', value: 'Silky Straight' },
      { label: 'Cap Size', value: 'Small' },
      { label: 'Construction', value: 'Fully Hand-Tied Full Lace' },
      { label: 'Scalp Simulation', value: '4" × 12", front to back' },
      { label: 'Fit', value: 'Built-in combs & adjustable strap' },
    ],
    images: [
      {
        src: '/products/alisha/alisha-1.jpg',
        alt: 'Front view of the Alisha 18" full lace wig, showing silky straight #4 medium reddish brown European hair falling past the shoulders.',
      },
      {
        src: '/products/alisha/alisha-2.jpg',
        alt: 'Close view of the Alisha wig\'s hand-tied center part, where the Scalp Simulation panel mimics the look of a real scalp.',
      },
      {
        src: '/products/alisha/alisha-3.jpg',
        alt: 'Back view of the Alisha wig showing the full 18" length and blunt silky straight ends.',
      },
      {
        src: '/products/alisha/alisha-4.jpg',
        alt: 'The Alisha wig lifted by hand to reveal the hand-tied cap and the part line running front to back.',
      },
      {
        src: '/products/alisha/alisha-5.jpg',
        alt: 'Overhead view of the Alisha wig showing the Scalp Simulation part and the pre-cut lace at the hairline.',
      },
    ],
  },

  {
    slug: 'amara',
    name: 'Amara',
    category: 'Straight',
    specLine: '18" · Color 1B Natural · 130% Density',
    constructionLine: 'Full Lace · Scalp Simulation Technology™',
    tagline:
      'An 18" custom hand-tied full lace wig in silky straight European virgin hair, a natural 1B at 130% density for natural fullness.',
    highlights: [
      {
        title: '18" Custom Hand-Tied Full Lace Wig',
        body: '130% density for a natural fullness.',
      },
      {
        title: 'Scalp Simulation Technology™ Top',
        body: 'Create a natural part in any direction, for the appearance of hair growing directly from your scalp.',
      },
      {
        title: '100% European Virgin Hair',
        body: 'Silky straight in a natural 1B.',
      },
      {
        title: 'Fully Hand-Tied Construction',
        body: 'Lightweight, breathable, and made for realistic movement.',
      },
      {
        title: 'Small Cap',
        body: 'Includes built-in combs and an adjustable strap for a secure, comfortable fit.',
      },
    ],
    specs: [
      { label: 'Length', value: '18"' },
      { label: 'Color', value: '1B Natural' },
      { label: 'Density', value: '130%' },
      { label: 'Hair', value: '100% European Virgin' },
      { label: 'Texture', value: 'Silky Straight' },
      { label: 'Cap Size', value: 'Small' },
      { label: 'Construction', value: 'Fully Hand-Tied Full Lace' },
      { label: 'Scalp Simulation', value: 'Top' },
      { label: 'Fit', value: 'Built-in combs & adjustable strap' },
    ],
    images: [
      {
        src: '/products/amara/amara-1.jpg',
        alt: 'Back view of the Amara 18" full lace wig on a stand, showing silky straight natural 1B European virgin hair at 130% density.',
      },
      {
        src: '/products/amara/amara-2.jpg',
        alt: 'Overhead view of the Amara wig showing the Scalp Simulation part and the full lace front panel.',
      },
      {
        src: '/products/amara/amara-3.jpg',
        alt: 'The Amara wig held up to show its length, shine, and the hand-tied lace along the front hairline.',
      },
    ],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

/**
 * Derived from the catalogue rather than hardcoded, so the filter bar never
 * offers a style we don't currently carry. Ordered Straight → Wavy → Curly.
 */
const CATEGORY_ORDER: ProductCategory[] = ['Straight', 'Wavy', 'Curly'];

export const categories: Array<ProductCategory | 'All'> = [
  'All',
  ...CATEGORY_ORDER.filter((c) => products.some((p) => p.category === c)),
];
