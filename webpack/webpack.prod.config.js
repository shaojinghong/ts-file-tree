const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const baseWebpackConfig = require('./webpack.base.config');

module.exports = merge(baseWebpackConfig, config = {
  mode: 'production',

  entry: [
    './src/main.js'
  ],

  plugins: [
    new CleanWebpackPlugin()
  ]
});
