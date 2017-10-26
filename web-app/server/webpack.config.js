//eslint-disable-next-line
'use strict';

const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './index.js',
  target: 'node',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [__dirname, path.resolve(__dirname,'../../packages')],
        exclude: /node_modules/,
        options: {
          babelrc: false,
          presets: [
            [
              'env',
              {
                targets: {
                  node: 6,
                },
                useBuiltIns: true,
                modules: false,
                debug: true,
              },
            ]
          ],
        },
      },
    ],
  },
};
