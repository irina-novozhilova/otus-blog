const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const glob = require("glob");

const pages = glob.sync("pages/*.html");

const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');

module.exports = (env) => ({
  entry: {
    index: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name]-[hash].js",
    clean: true,
    environment: {
      arrowFunction: false,
    },
  },
  devtool: env.production ? "source-map" : "eval-source-map",
  mode: env.production ? "production" : "development",
  devServer: {
    compress: true,
    port: 9000,
    watchFiles: "./src/**/*",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|jpeg|jpg)/i,
        type: "asset/resource",
        generator: {
          filename: "static/[hash][ext]",
        },
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
  plugins: [
    // ...pages.map(
    //     (el) =>
    //         new HtmlWebpackPlugin({
    //           filename: el.replace(/^pages\//, ""),
    //           template: el,
    //         })
    // ),
    new HtmlWebpackPlugin({
      filename: 'output.pug',
      minify: false
    }),
    new HtmlWebpackPugPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name]-[hash].css",
    }),
  ],
  optimization: {
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      // `...`,
      new CssMinimizerPlugin(),
    ],
  },
});
