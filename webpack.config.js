// webpack.config.js

const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");

module.exports = {
  //...
  plugins: [
    new Dotenv(),
    new webpack.DefinePlugin({
      "process.env.NG_ENV": JSON.stringify(process.env.NG_ENV),
    }),
  ],
};
