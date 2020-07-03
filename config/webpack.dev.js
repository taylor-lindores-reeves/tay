const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

module.exports = {
  entry: {
    main: ["@babel/register", "./src/main.js"],
  },
  mode: "development",
  output: {
    filename: "[name]-bundle.js",
    // chunkFilename: "[name].js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/", // root path
  },
  devServer: {
    historyApiFallback: true,
    overlay: true,
    hot: true,
    contentBase: "dist",
    stats: {
      colors: true,
    }, // everything will be saved out of dist when we run the webpack dev server
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{ loader: "babel-loader" }],
        exclude: /node_modules/,
      },
      {
        test: /\.sass$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader", // does the linting then passes above
            options: {
              attrs: ["img:/src"], // of the attributes in the element img, the /docs attribute is what we want to target
            },
          },
        ],
      },
      {
        test: /\.pug$/,
        use: [
          {
            loader: "pug-loader", // does the linting then passes above
          },
        ],
          }
        ]
      },
      {
        test: /\.(jpg|gif|png|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name]-[hash:8].[ext]",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development"),
      },
    }),
    new HTMLWebpackPlugin({
      template: "./src/index.html",
      inject: true,
    }),
    new BrowserSyncPlugin({
      // browse to http://localhost:3000/ during development,
      // ./public directory is being served
      host: 'localhost',
      port: 3000,
      proxy: "localhost:8080",
      open: false,
    })
    // new BundleAnalyzerPlugin({
    //   generateStatsFile: true
    // })
  ],
};
