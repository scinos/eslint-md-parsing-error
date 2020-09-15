module.exports = {
  root: true,
  extends: ["plugin:prettier/recommended", "plugin:md/recommended"],
  overrides: [
    {
      files: ["*.md"],
      parser: "markdown-eslint-parser",
      rules: {
        "md/remark": ["off"],
        "prettier/prettier": ["error", { parser: "markdown" }],
      },
    },
  ],
};
