// webpack.config.js

const webpack = require("webpack");

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NG_ENV": JSON.stringify("production"),
    }),
  ],
};
