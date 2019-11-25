const express = require("express"),
  config = require("config"),
  debug = require('./util/debug'),
  keys = require('./keys/keys')

const app = express();

keys.readall()

debug.label(keys.get('app'))


debug.log(`Spinning up the server...`)
const server = app.listen(config.server.port, () =>
  debug.info(config.server.messages.wake + config.server.port, keys.get('server'))
);

module.exports.app = app;
