import globals from "globals";
import pluginJs from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import pluginPrettier from "eslint-plugin-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,vue}"],
    languageOptions: { globals: globals.browser },
    plugins: { prettier: pluginPrettier },
    rules: {
      "prettier/prettier": "error",
      "vue/html-indent": ["error", 2],
      "vue/max-attributes-per-line": [
        "error",
        { singleline: 3, multiline: { max: 1 } },
      ],
      "vue/html-self-closing": [
        "error",
        { html: { normal: "always", void: "always" } },
      ],
    },
  },
  pluginJs.configs.recommended,
  ...pluginVue.configs["flat/essential"],
];
