/**
 * Regenerates the social-share images in public/:
 *   - og-*.jpg + logo.png            one per marketing page
 *   - products/<slug>/og.jpg         one per product, generated from products.ts
 *
 * Product cards are data-driven, so a new entry in products.ts gets a card
 * automatically — nothing here needs editing.
 *
 * Run it whenever copy, products, or photography change:
 *   npm run dev              # in another shell — the templates load /Khair.svg
 *   npm i --no-save playwright && npx playwright install chromium
 *   node tools/generate-og-images.mjs
 *
 * Templates are written into public/__og/ so the dev server can resolve the
 * logo and product photos by URL, then removed again — they are never shipped.
 */
import { chromium } from 'playwright';
import { mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { products } from '../src/data/products.ts';

const ORIGIN = process.env.OG_ORIGIN ?? 'http://localhost:3000';
const TEMPLATE_DIR = 'public/__og';

const CARDS = [
  ['og-image',       'Hand-Tied Luxury',  'Made to Look Like Yours.', 'But Better.',     '~120,000 strands, hand-tied over 100+ hours.',     '/products/alisha/alisha-1.jpg'],
  ['og-collection',  'Our Collection',    'Pieces Designed',          'to Disappear.',   'Hand-tied full lace in 100% European hair.',       '/products/amara/amara-1.jpg'],
  ['og-story',       'Our Story',         'Born from 15 Years',       'of Hair Loss.',   'Built by someone who needed it first.',            '/products/alisha/alisha-3.jpg'],
  ['og-custom',      'Custom Orders',     'Made to Your',             'Measurements.',   'Length, color, density, and cap — all yours.',     '/products/amara/amara-3.jpg'],
  ['og-care',        'Care Guide',        'Care That Keeps It',       'Flawless.',       'Washing, styling, and maintenance, step by step.', '/products/alisha/alisha-5.jpg'],
  ['og-measurement', 'Measurement Guide', 'A Fit That Is',            'Uniquely Yours.', 'The six-point BGH system, in under five minutes.', '/products/amara/amara-2.jpg'],
];

const card = (eyebrow, l1, l2, sub, photo) => `<!doctype html><html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet">
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{width:1200px;height:630px;overflow:hidden;background:#281e1d;display:flex;font-family:'DM Sans',sans-serif}
.left{width:62%;padding:64px 56px;display:flex;flex-direction:column;justify-content:space-between}
.logo{width:210px;height:74px;background-color:#E8E2D8;-webkit-mask:url('/Khair.svg') no-repeat center left/contain;mask:url('/Khair.svg') no-repeat center left/contain}
.eyebrow{font-size:15px;letter-spacing:.32em;text-transform:uppercase;color:#C4A265;margin-bottom:20px}
h1{font-family:'Cormorant Garamond',serif;font-weight:300;font-size:64px;line-height:1.08;color:#E8E2D8}
h1 em{font-style:italic;color:#C4A265;display:block}
.rule{width:64px;height:1px;background:#C4A265;margin:26px 0 20px;opacity:.6}
.sub{font-size:17px;line-height:1.55;color:#D4CCC0;font-weight:300;max-width:560px;text-wrap:balance}
.right{width:38%;position:relative;overflow:hidden}
.right img{width:100%;height:100%;object-fit:cover;display:block}
.right::after{content:'';position:absolute;inset:0;background:linear-gradient(90deg,#281e1d 0%,rgba(40,30,29,.45) 22%,transparent 55%)}
</style></head><body>
<div class="left"><div class="logo"></div>
<div><div class="eyebrow">${eyebrow}</div><h1>${l1}<em>${l2}</em></h1><div class="rule"></div><div class="sub">${sub}</div></div></div>
<div class="right"><img src="${photo}"></div></body></html>`;

const logoCard = `<!doctype html><html><head><meta charset="utf-8"><style>
*{margin:0;padding:0}body{width:600px;height:600px;background:#281e1d;display:flex;align-items:center;justify-content:center}
.logo{width:440px;height:200px;background-color:#E8E2D8;-webkit-mask:url('/Khair.svg') no-repeat center/contain;mask:url('/Khair.svg') no-repeat center/contain}
</style></head><body><div class="logo"></div></body></html>`;

/** One landscape card per product, so shares aren't a centre-cropped 3:4 photo. */
const productCards = products
  .filter((p) => p.images.length > 0)
  .map((p) => ({
    template: `product-${p.slug}`,
    out: `public/products/${p.slug}/og.jpg`,
    html: card(
      `${p.category} · Hand-Tied`,
      p.name,
      p.specs.find((s) => s.label === 'Texture')?.value ?? 'Full Lace',
      p.specLine,
      p.images[0].src,
    ),
  }));

const pageCards = CARDS.map(([name, ...rest]) => ({
  template: name,
  out: `public/${name}.jpg`,
  html: card(...rest),
}));

mkdirSync(TEMPLATE_DIR, { recursive: true });
mkdirSync('/tmp/og-out', { recursive: true });
for (const c of [...pageCards, ...productCards]) {
  writeFileSync(`${TEMPLATE_DIR}/${c.template}.html`, c.html);
}
writeFileSync(`${TEMPLATE_DIR}/logo.html`, logoCard);

const jobs = [
  ...pageCards.map((c) => ({ ...c, w: 1200, h: 630, fmt: 'jpeg' })),
  ...productCards.map((c) => ({ ...c, w: 1200, h: 630, fmt: 'jpeg' })),
  { template: 'logo', out: 'public/logo.png', w: 600, h: 600, fmt: 'png' },
];

const browser = await chromium.launch();
try {
  for (const { template, out, w, h, fmt } of jobs) {
    const page = await browser.newPage({ viewport: { width: w, height: h }, deviceScaleFactor: 1 });
    await page.goto(`${ORIGIN}/__og/${template}.html`, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(600);
    await page.screenshot({ path: `/tmp/og-out/${template}.png` });
    await page.close();

    const args = fmt === 'png'
      ? ['-s', 'format', 'png', `/tmp/og-out/${template}.png`, '--out', out]
      : ['-s', 'format', 'jpeg', '-s', 'formatOptions', '78', `/tmp/og-out/${template}.png`, '--out', out];
    execFileSync('sips', args, { stdio: 'ignore' });
    console.log('wrote', out);
  }
} finally {
  await browser.close();
  rmSync(TEMPLATE_DIR, { recursive: true, force: true });
}
