import webpack from 'webpack';
import path from 'path-browserify';

export default function override(config) {
  config.resolve.fallback = {
    path: path,
    fs: false,
    os: false,
    http: false,
    https: false,
    stream: false,
    crypto: false,
  };

  return config;
}

