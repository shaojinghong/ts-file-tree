// const WebpackBar = require('webpackbar');
const path = require('path');

const resolve = absolutePath => path.resolve((process.cwd(), absolutePath));

module.exports = {

  output: {
    path: resolve('dist'),
    filename: 'js/[name].js'
  },

  resolve: {
    extensions: ['.js', 'ts', '.tsx', '.css', '.scss']
  },

  module: {
    rules: [
      {
        // test: /\.js(x)$/ 无效
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/, // 不解析node_modules
        loader: 'ts-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\/src\/(scss|components|widgets)\/(.*)\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              includePaths: [resolve('src/scss')],
            }
          }
        ]
      },
      // src/modules下的scss启用css modules
      {
        test: /\/src\/modules\/(.*)\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[local]--[hash:base64:5]',
                hashPrefix: 'hash',
              }
            }
          },
          'postcss-loader',
          {
            loader: 'sass-loader'
            // options: {
            //   includePaths: [resolve('src/scss')],
            // }
          }
        ]
      }
    ]
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
        styles: {
          name: 'main',
          test: /\/src\/(.*)\.scss$/,
          chunks: 'all',
          enforce: true
        }
      },
    },
  },

  plugins: [
    // new WebpackBar({
    //   name: NODE_ENV,
    //   color: 'green',
    //   profile: !isDev,
    // })
  ]
}
