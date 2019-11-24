const express = require("express"),
  config = require("config"),
  debug = require('./util/debug')

const app = express();

debug.label("Flip and learn")

debug.log(`Spinning up the server...`)
const server = app.listen(config.server.port, () =>
  debug.info(config.server.messages.wake + config.server.port)
);

module.exports.app = app;
