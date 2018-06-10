import express from "express";
import path from "path";

const app = express();

const webpack = require("webpack");
const config = require("../../config/webpack.dev.js");
const compiler = webpack(config);
const webpackDevMiddleware = require("webpack-dev-middleware")(
  compiler,
  config.devServer
);

const staticMiddleware = express.static("dist"); // takes one argument, the root of our web server
const webpackHotMiddleware = require("webpack-hot-middleware")(compiler);

app.use(webpackDevMiddleware);

app.use(webpackHotMiddleware);

app.use(staticMiddleware); // serves up the dist folder

app.listen(8080, () => {
  console.log("Server is listening...");
});
