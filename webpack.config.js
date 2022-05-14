const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  //打包模式:'production' or development'
  mode: 'production',
  entry: {
    app: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'), //path为打包后的输出文件夹位置，此处为 ./dist文件夹
    filename: 'bundle.js'
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}
