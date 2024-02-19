// webpack.common.js

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // 从js中提取css生成独立文件，提高页面性能
const { VueLoaderPlugin } = require('vue-loader')
const CopyPlugin = require("copy-webpack-plugin")

module.exports = {
  entry: path.resolve(__dirname, '../src/main.js'),
  output: {
    path: path.join(__dirname, '../dist'), // 打包后生成的文件夹
    filename: '[name].[contenthash:8].js', // js文件名称
    clean: true, // 每次构建都清除dist包
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name]_[contenthash:8].css', // css文件名称
    }),
    new VueLoaderPlugin(),
    new CopyPlugin({
      patterns: [
        // 说明：在此测试项目中，`public/static`中的内容打包时会被复制到`dist/static`中...
        {
          from: path.resolve(__dirname, '../public/assets'), // 定义要拷贝的源目录
          to: 'assets', // 定义要拷贝到的目标目录，非必填，不填写则拷贝到打包的output输出地址中
        },
      ],
    }),
  ],
  module: {
    rules: [
    // vue-loader 要放在匹配规则的第一个，否则会报错
    {
      test: /\.vue$/,
      loader: 'vue-loader',
      include: [path.resolve(__dirname, '../src')],
    },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(scss|sass)$/, // 解析scss、sass，需安装sass-loader
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /(\.jsx|\.js)$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico)(\?.*)?$/,
        type: 'javascript/auto',
        loader: 'url-loader',
        options: {
          esModule: false,
          limit: 10000,
          name: 'img/[name].[hash:7].[ext]',
        },
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'media/[name].[hash:7].[ext]',
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'fonts/[name].[hash:7].[ext]',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.vue'], // 省略文件后缀
    alias: {
      // 配置别名
      '@': path.resolve(__dirname, '../src'),
    },
  },
}