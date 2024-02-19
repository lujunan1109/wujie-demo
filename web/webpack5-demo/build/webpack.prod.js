// webpack.prod.js
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const env = require('../config/prod.env.js')
const path = require('path')
// 打包进度显示
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const TerserPlugin= require('terser-webpack-plugin')

module.exports = merge(common, {
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].[chunkhash].js', // 此选项决定了每个输出 bundle 的名称
    // chunkFilename: 'js/[id].[chunkhash].js', // 此选项决定了非入口(non-entry) chunk 文件的名称
    publicPath: './',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.html$/i, // 将HTML导出为字符串，处理HTML中引入的静态资源
        loader: 'html-loader',
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(env.NODE_ENV),
      },
    }),
    new ProgressBarPlugin({
      complete: '█',
    }),
    new CompressionPlugin({
      algorithm: 'gzip',
      test: /\.(js|css|html)$/,
      threshold: 102400, // 压缩阈值100KB
      minRatio: 0.8 // 压缩比
    }),
    new TerserPlugin({
      parallel: true, // 多进程
      terserOptions: {
        ecma: undefined,
        warnings: false,
        parse: {},
        compress: {
          drop_console: true,
          drop_debugger: true,
          pure_funcs: ['console.log'], // 移除console
        },
      },
    }),
  ],
  externals: {
    jquery: 'jQuery',
  }
})