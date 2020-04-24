module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/airbnb"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    quotes: process.env.NODE_ENV === "production" ? "warn" : "off",
    "comma-dangle": process.env.NODE_ENV === "production" ? "warn" : "off",
    "arrow-parens": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-shadow": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-return-assign": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-labels": process.env.NODE_ENV === "production" ? "warn" : "off",
    radix: process.env.NODE_ENV === "production" ? "warn" : "off"
  }
};
