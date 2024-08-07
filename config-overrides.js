const webpack = require('webpack');

module.exports = function override(config) {
  config.resolve.fallback = {
    path: require.resolve('path-browserify'),
    fs: false,
    os: false,
    http: false,
    https: false,
    stream: false,
    crypto: false,
  };

  return config;
};

