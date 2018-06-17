const express = require("express");
const server = express(); // development server setup

const webpack = require("webpack");
const config = require("../../config/webpack.dev.js");
const compiler = webpack(config);

const webpackDevMiddleware = require("webpack-dev-middleware")(
  compiler,
  config.devServer
);
const webpackHotMiddleware = require("webpack-hot-middleware")(compiler, config.devServer);
server.use(webpackDevMiddleware);
server.use(webpackHotMiddleware);

// const staticMiddleware = express.static("dist"); // takes one argument, the root of our web server
// server.use(staticMiddleware); // serves up the dist folder

const expressStaticGzip = require('express-static-gzip')
server.use(expressStaticGzip("dist"))


const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
  console.log(`Server is listening on https://localhost:${PORT} in ${process.env.NODE_ENV} mode`);
}); // development server setup
