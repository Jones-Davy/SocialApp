module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "standard-with-typescript",
    "plugin:react/recommended",
    "plugin:i18next/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],

  plugins: ["react", "@typescript-eslint", "i18next"],
  rules: {
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "@typescript-eslint/member-delimiter-style": "off",
    "@typescript-eslint/prefer-nullish-coalescing": "off",
    "@typescript-eslint/comma-dangle": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    // "@typescript-eslint/explicit-function-return-type": [1, "always"],
    "react/prop-types": "off",
    "@typescript-eslint/quotes": ["error", "double"],
    "@typescript-eslint/semi": ["error", "always"],
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": "off",
    "i18next/no-literal-string": ["error", { markupOnly: true }],
    "@typescript-eslint/consistent-type-imports": "off"
  },
};
