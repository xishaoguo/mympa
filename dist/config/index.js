"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require("lodash");

let config = {
  env: process.env.NODE_ENV
};

if (false) {
  console.log(123);
}

if (process.env.NODE_ENV == "development") {
  const localConfig = {
    port: 8081
  };
  config = (0, _lodash.extend)(config, localConfig);
}

if (process.env.NODE_ENV == "production") {
  const proConfig = {
    port: 80
  };
  config = (0, _lodash.extend)(config, proConfig);
}

exports.default = config;