const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  entry: {
    app: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // 在开发过程中回退到 style-loader
          // process.env.NODE_ENV !== 'production'
          //   ? 'style-loader'
          //   : MiniCssExtractPlugin.loader,
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.jpe?g$/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name].[hash:5].[ext]'
        }
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new MiniCssExtractPlugin(),
  ]
}
