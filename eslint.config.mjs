import eslintPluginImport from "eslint-plugin-import";
import eslintPluginTs from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";

export default [
   {
      ignores: ["node_modules", "dist", "coverage"],
   },
   {
      files: ["**/*.ts"],
      languageOptions: {
         parser: typescriptParser,
         parserOptions: {
            project: "./tsconfig.json",
            sourceType: "module",
         },
      },
      plugins: {
         "@typescript-eslint": eslintPluginTs,
         import: eslintPluginImport,
      },
      rules: {
         // Base rules (like ESLint recommended)
         "no-unused-vars": "off", // we delegate to TS
         "no-undef": "off", // TS handles this

         // TypeScript-specific rules
         "@typescript-eslint/no-unused-vars": [
            "warn",
            { argsIgnorePattern: "^_" },
         ],
         "@typescript-eslint/explicit-module-boundary-types": "off",

         // Import hygiene
         "import/order": [
            "warn",
            {
               groups: [
                  "builtin",
                  "external",
                  "internal",
                  "parent",
                  "sibling",
                  "index",
               ],
               "newlines-between": "always",
            },
         ],
      },
   },
];
