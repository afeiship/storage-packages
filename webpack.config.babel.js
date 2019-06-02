import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackBar from 'webpackbar';

const { NODE_ENV } = process.env;

export default {
  mode: NODE_ENV,
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
    hints: NODE_ENV === 'production' ? 'warning' : false
  },
  plugins: [
    new WebpackBar(),
    new HtmlWebpackPlugin({
      template: './src/index.ejs',
      filename: 'index.html'
    })
  ]
};
