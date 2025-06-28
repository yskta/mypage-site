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
    rules: {
      // 未使用変数を警告
      "@typescript-eslint/no-unused-vars": "warn",
      
      // React関連
      "react/no-unescaped-entities": "error",
      "react-hooks/exhaustive-deps": "warn",
      
      // TypeScript関連
      "@typescript-eslint/no-explicit-any": "warn",
      
      // 一般的なコード品質
      "no-console": "warn",
      "no-debugger": "error",
      "no-duplicate-imports": "error",
      
      // Next.js関連
      "@next/next/no-img-element": "warn",
      
      // コードスタイル
      "prefer-const": "error",
      "no-var": "error",
      "object-shorthand": "warn",
      
      // セキュリティ
      "no-eval": "error",
      "no-implied-eval": "error"
    },
    settings: {
      react: {
        version: "detect"
      }
    }
  }
];

export default eslintConfig;