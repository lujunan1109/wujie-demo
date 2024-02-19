
// webpack.dev.js

const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path')
const env = require('../config/dev.env')
const webpack = require('webpack')

module.exports = merge(common, {
  stats: 'errors-only',
  devServer: {
    hot: true,
    open: false,
    port: 8088,
    compress: true, // 开启gzip压缩
    static: {
      // 托管静态资源文件, 可通过数组的方式托管多个静态资源文件
      directory: path.join(__dirname, '../public'),
    },
    client: {
      progress: false, // 在浏览器端打印编译速度
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(env.NODE_ENV),
      },
    }),
  ],
})