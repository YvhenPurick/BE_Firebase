// prettier-ignore
module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 9,
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
  },
  extends: ["eslint:recommended", "google"],
  rules: {
    quotes: [2, "double", {
      "avoidEscape": true,
    }],
    ["object-curly-spacing"]: [2, "always"],
  },
};
