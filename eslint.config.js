import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
   baseDirectory: __dirname,
});

export default [
   ...compat.extends([
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:import/recommended",
      "plugin:import/typescript",
      "prettier", // disables conflicting rules with Prettier
   ]),
   {
      files: ["**/*.ts"],
      languageOptions: {
         parser: "@typescript-eslint/parser",
         parserOptions: {
            project: "./tsconfig.json",
            sourceType: "module",
         },
      },
      rules: {
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
         "@typescript-eslint/explicit-module-boundary-types": "off", // optional preference
         "@typescript-eslint/no-unused-vars": [
            "warn",
            { argsIgnorePattern: "^_" },
         ],
      },
   },
];
