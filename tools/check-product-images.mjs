/**
 * Fails the build if products.ts references an image that isn't in public/.
 *
 * Without this a typo or a deleted photo ships silently: the build succeeds and
 * the live page renders a broken-image icon. Runs automatically via prebuild.
 */
import { existsSync } from 'node:fs';
import { products } from '../src/data/products.ts';

const missing = [];

for (const product of products) {
  for (const image of product.images) {
    if (!existsSync(`public${image.src}`)) {
      missing.push(`${product.slug}: public${image.src}`);
    }
  }
  if (product.images.length === 0) {
    console.warn(`warning: ${product.slug} has no images`);
  }
}

if (missing.length > 0) {
  console.error('\nMissing product images:\n');
  for (const m of missing) console.error(`  ${m}`);
  console.error('\nAdd the file, or remove the reference from src/data/products.ts.\n');
  process.exit(1);
}

const count = products.reduce((n, p) => n + p.images.length, 0);
console.log(`product images OK (${count} across ${products.length} products)`);
