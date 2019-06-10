import webpack from 'webpack';
import { resolve } from 'path';

const { CleanWebpackPlugin, Webpackbar } = require('next-load-plugins').load();

export default {
  mode: process.env.NODE_ENV || 'production',
  entry: {
    react: ['react', 'react-dom'],
    next: ['next-js-core2']
  },
  output: {
    path: resolve(__dirname, 'dist/'),
    filename: 'vendors/dll-[name].[chunkhash].js',
    library: '[name]_library'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new Webpackbar(),
    new webpack.DllPlugin({
      path: resolve(__dirname, 'dist/vendors/manifest.json'),
      name: '[name]_library'
    })
  ]
};
