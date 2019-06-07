import webpack from 'webpack';
import glob from 'glob';
import { resolve } from 'path';

const { NODE_ENV } = process.env;
const {
  HtmlWebpackPlugin,
  Webpackbar,
  MiniCssExtractPlugin,
  PurgecssWebpackPlugin,
  TerserWebpackPlugin,
  OptimizeCssAssetsWebpackPlugin,
  AddAssetHtmlWebpackPlugin
} = require('next-load-plugins').load();

export default {
  mode: NODE_ENV,
  entry: './src/index.js',
  output: {
    filename: '[name].[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          NODE_ENV === 'development'
            ? 'style-loader'
            : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  performance: {
    hints: NODE_ENV === 'production' ? 'warning' : false
  },
  optimization: {
    minimizer: [new TerserWebpackPlugin(), new OptimizeCssAssetsWebpackPlugin()]
  },
  devServer: {
    host: '0.0.0.0',
    port: 3006,
    stats: 'errors-only'
  },
  plugins: [
    new Webpackbar(),
    new webpack.NamedModulesPlugin(),
    new webpack.HashedModuleIdsPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.ejs',
      filename: 'index.html'
    }),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: resolve('dist/vendors/manifest.json')
    }),
    new AddAssetHtmlWebpackPlugin([
      {
        includeSourcemap: false,
        hash: true,
        filepath: resolve(__dirname, 'dist/vendors.js'),
        outputPath: 'vendors'
      }
    ]),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].css'
    }),
    new PurgecssWebpackPlugin({
      paths: glob.sync('src/**/*', { nodir: true })
    })
  ]
};
