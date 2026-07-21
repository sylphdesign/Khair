import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    // `output: 'export'` forces next/image into unoptimized mode, where it does
    // no resizing — so a plain <img> is equivalent here, and simpler. Product
    // images are sized ahead of time and their boxes use CSS aspect-ratio, so
    // lazy loading and CLS are already handled.
    // NB: the brackets in [slug] must be escaped — unescaped they parse as a
    // glob character class and never match the literal directory name.
    files: ["src/components/ProductCard.tsx", "src/app/collection/\\[slug\\]/page.tsx"],
    rules: { "@next/next/no-img-element": "off" },
  },
  {
    rules: {
      "react/no-unescaped-entities": "off",
      "@typescript-eslint/no-unused-vars": "warn",
    },
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
];

export default eslintConfig;
