const express = require('express');
const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const baseWebpackConfig = require('./webpack.base.config');

const { NODE_ENV } = process.env;

const config = merge(baseWebpackConfig, {
  mode: NODE_ENV,

  devtool: 'cheap-module-eval-source-map',

  output: {
    filename: 'js/[name].js'
  },

  entry: [
    './src/main.tsx',
    'webpack-hot-middleware/client?path=http://localhost:4000/__webpack_hmr&noInfo=true&reload=true'
  ],

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
});

const compiler = webpack(config);

const app = express();

app.all('*', (req, res, next) => {
  res.set('Access-Control-Allow-Origin', '*');
  next();
});

app.use(webpackDevMiddleware(compiler, {
  // 生成的新文件所指向的路径和内存中采用的文件存储write path需要一致，即output.publicPath,
  publicPath: '/hot-update',
}));

app.use(webpackHotMiddleware(compiler));

// 访问http://localhost:4000/static/js/main.js即可看到打包后的文件
app.listen(4000, () => console.log('webpack hot module replace is listening 4000'));
