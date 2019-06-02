import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackBar from 'webpackbar';


export default {
  mode: process.env.NODE_ENV,
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  performance: {
    hints: process.env.NODE_ENV === 'production' ? 'warning' : false
  },
  plugins: [
    new WebpackBar(),
    new HtmlWebpackPlugin({
      template: './src/index.ejs',
      filename: 'index.html'
    })
  ]
};
