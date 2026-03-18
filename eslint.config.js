import js from "@eslint/js";
import prettierPlugin from "eslint-plugin-prettier";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
  globalIgnores(["dist", "src/components/ui"]),
  {
    files: ["**/*.{ts,tsx,js,jsx}"],

    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.recommended
    ],

    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser
    },

    plugins: {
      prettier: prettierPlugin
    },

    rules: {
      "prettier/prettier": ["error", {}, { usePrettierrc: true }],
      "react-refresh/only-export-components": [
        "off",
        { extraHOCs: [] } // Don't add TanStack Router HOCs
      ]
    }
  }
]);
