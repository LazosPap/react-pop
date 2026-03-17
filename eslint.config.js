import js from "@eslint/js";
import { defineConfig, globalIgnores } from "eslint/config";
import prettierPlugin from "eslint-plugin-prettier";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import simpleImportSortPlugin from "eslint-plugin-simple-import-sort";
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
      reactRefresh.configs.vite
    ],

    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser
    },

    plugins: {
      "simple-import-sort": simpleImportSortPlugin,
      prettier: prettierPlugin
    },

    rules: {
      "prettier/prettier": ["error", {}, { usePrettierrc: true }],
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            ["^react"], // React first
            ["^@?\\w"], // External packages
            ["^components/", "^utils/", "^hooks/"], // Internal aliases
            ["^@/assets"], // Assets can be last
            ["^\\./", "^\\.\\./"] // Relative imports
          ]
        }
      ],
      "simple-import-sort/exports": "error"
    }
  }
]);
