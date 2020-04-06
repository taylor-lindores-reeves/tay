import express from "express";
const server = express(); // development server setup
const isProd = process.env.NODE_ENV === "production"
const expressStaticGzip = require('express-static-gzip')
const index = require("./index")
const bodyParser = require('body-parser');
require('dotenv').config();

if (!isProd) {
  const webpack = require("webpack")
  const config = require("../../config/webpack.dev.js")
  const compiler = webpack(config)

  const webpackDevMiddleware = require("webpack-dev-middleware")(
    compiler,
    config.devServer
  )

  const webpackHotMiddlware = require("webpack-hot-middleware")(
    compiler,
    config.devServer
  )

  server.use(webpackDevMiddleware)
  server.use(webpackHotMiddlware)
  console.log("Middleware enabled")
}

server.use(expressStaticGzip("dist", { enableBrotli: true }))
server.use(bodyParser.json());
server.use("/", index);

const PORT = process.env.PORT || 8080
server.listen(PORT, () => {
  console.log(
    `Server listening on http://localhost:${PORT} in ${process.env.NODE_ENV} mode`
  )
})