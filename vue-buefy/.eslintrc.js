module.exports = {
  extends: "eslint-config-antife",
  plugins: ["babel", "html"],
  overrides: [
    {
      files: ["spec/**/*.js"],
      rules: {
        "no-use-before-define": ["off"],
        "max-lines-per-function": ["off"],
      },
    },
  ],
};
