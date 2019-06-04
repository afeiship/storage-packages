import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackBar from 'webpackbar';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import AutoDllPlugin from 'autodll-webpack-plugin';
import PurgecssPlugin from 'purgecss-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import TerserJSPlugin from 'terser-webpack-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import glob from 'glob';

const { NODE_ENV } = process.env;

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
    minimizer: [
      new TerserJSPlugin(),
      new OptimizeCSSAssetsPlugin()
    ]
  },
  devServer: {
    host: '0.0.0.0',
    port: 3006,
    stats: 'errors-only'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new WebpackBar(),
    new webpack.NamedModulesPlugin(),
    new webpack.HashedModuleIdsPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.ejs',
      filename: 'index.html'
    }),
    new AutoDllPlugin({
      inject: true,
      filename: '[name].[contenthash].js',
      entry: {
        vendor: ['next-js-core2']
      }
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].css'
    }),
    new PurgecssPlugin({
      paths: glob.sync('src/**/*', { nodir: true })
    })
  ]
};
