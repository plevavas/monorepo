const path = require("path");

const withTM = require("next-transpile-modules")(["ui"]);

module.exports = withTM({
  reactStrictMode: true,
  experimental: {
    outputFileTracingRoot: path.join(__dirname, "../.."),
  },
  output: "standalone",
  // https://github.com/vercel/next.js/issues/11669
  compress: false,
});
