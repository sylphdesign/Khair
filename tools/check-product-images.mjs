/**
 * Fails the build if products.ts references an image that isn't in public/.
 *
 * Without this a typo or a deleted photo ships silently: the build succeeds and
 * the live page renders a broken-image icon. Runs automatically via prebuild.
 *
 * products.ts is parsed as TEXT rather than imported. Importing it would need
 * Node's TypeScript stripping (22.6+), and the deploy environment runs Node 20 —
 * an import here fails the build with ERR_UNKNOWN_FILE_EXTENSION. Plain string
 * matching keeps this working on every Node version.
 */
import { existsSync, readFileSync } from 'node:fs';

const SOURCE = 'src/data/products.ts';
const source = readFileSync(SOURCE, 'utf8');

/** Each src belongs to the most recent slug declared above it. */
const entries = [
  ...source.matchAll(/(?:slug:\s*'(?<slug>[^']+)')|(?:src:\s*'(?<src>[^']+)')/g),
];

const missing = [];
const seen = new Set();
let slug = '(unknown)';
let count = 0;

for (const { groups } of entries) {
  if (groups.slug) {
    slug = groups.slug;
    seen.add(slug);
    continue;
  }
  count += 1;
  if (!existsSync(`public${groups.src}`)) {
    missing.push(`${slug}: public${groups.src}`);
  }
}

if (count === 0) {
  console.error(`\nNo image references found in ${SOURCE}.`);
  console.error('The file format likely changed — update this check.\n');
  process.exit(1);
}

if (missing.length > 0) {
  console.error('\nMissing product images:\n');
  for (const m of missing) console.error(`  ${m}`);
  console.error(`\nAdd the file, or remove the reference from ${SOURCE}.\n`);
  process.exit(1);
}

console.log(`product images OK (${count} across ${seen.size} products)`);
