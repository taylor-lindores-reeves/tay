const path = require("path");
const webpack = require("webpack");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MinifyPlugin = require("babel-minify-webpack-plugin")
const CompressionPlugin = require("compression-webpack-plugin")
const BrotliPlugin = require("brotli-webpack-plugin");

module.exports = {
  entry: {
    main: ["./src/main.js"]
  },
  mode: "production",
  output: {
    filename: "[name]-bundle.js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/" // root path
  },
  devtool: false,
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{ loader: "babel-loader" }],
        exclude: /node_modules/
      },
      {
        test: /\.sass$/,
        use: [
          { loader: MiniCSSExtractPlugin.loader },
          {
            loader: "css-loader",
            options: {
              minimize: true
            }
          },
          { loader: "postcss-loader" },
          { loader: "sass-loader" }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader", // does the linting then passes above
            options: {
              attrs: ["img:src"] // of the attributes in the element img, the src attribute is what we want to target
            }
          }
        ]
      },
      {
        test: /\.pug$/,
        use: [
          {
            loader: "pug-loader", // does the linting then passes above
          }
        ]
      },
      {
        test: /\.(jpg|gif|png|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name]-[hash:8].[ext]"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new OptimizeCSSAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcesser: require("cssnano"),
      cssProcesserOptions: {
        discardComments: {
          removeAll: true
        }
      },
      canPrint: true
    }),
    new MiniCSSExtractPlugin({
      filename: "[name]-bundle.css"
    }),
    new HTMLWebpackPlugin({
      template: "./src/index.html"
    }),
    new MinifyPlugin(),
    new CompressionPlugin({
      algorithm: "gzip"
    }),
    new BrotliPlugin(),
    new webpack.DefinePlugin({ "process.env": { NODE_ENV: JSON.stringify("production") } })
  ]
};