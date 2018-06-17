const express = require("express");
const server = express(); // development server setup

const webpack = require("webpack");
const config = require("../../config/webpack.dev.js");
const compiler = webpack(config);

const webpackDevMiddleware = require("webpack-dev-middleware")(
  compiler,
  config.devServer
);
server.use(webpackDevMiddleware);

const staticMiddleware = express.static("dist"); // takes one argument, the root of our web server
server.use(staticMiddleware); // serves up the dist folder

const webpackHotMiddleware = require("webpack-hot-middleware")(compiler);
server.use(webpackHotMiddleware);

server.listen(8080, () => {
  console.log("Server is listening...");
}); // development server setup
