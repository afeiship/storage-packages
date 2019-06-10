import webpack from 'webpack';
import glob from 'glob';
import { resolve } from 'path';

const { NODE_ENV } = process.env;
const isDev = NODE_ENV === 'development';
const {
  HtmlWebpackPlugin,
  Webpackbar,
  MiniCssExtractPlugin,
  PurgecssWebpackPlugin,
  TerserWebpackPlugin,
  OptimizeCssAssetsWebpackPlugin,
  AddAssetHtmlWebpackPlugin
} = require('next-load-plugins').load();

const HappyPack = require('happypack');
const os = require('os');
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });

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
        use: ['happypack/loader?id=babel'],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
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
    hints: isDev ? false : 'warning'
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
    new HappyPack({
      id: 'babel',
      loaders: [
        {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      ],
      threadPool: happyThreadPool,
      verbose: true
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: resolve('dist/vendors/manifest.json')
    }),
    new HtmlWebpackPlugin({
      template: './src/index.ejs',
      filename: 'index.html'
    }),
    new AddAssetHtmlWebpackPlugin([
      {
        includeSourcemap: false,
        hash: false,
        filepath: resolve(__dirname, 'dist/vendors/dll-*.js'),
        outputPath: 'vendors',
        publicPath: 'vendors'
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
