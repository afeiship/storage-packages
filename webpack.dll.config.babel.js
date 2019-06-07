import webpack from 'webpack';
import { resolve } from 'path';

const { CleanWebpackPlugin } = require('next-load-plugins').load();

export default {
  mode: process.env.NODE_ENV,
  entry: {
    vendors: ['react', 'react-dom']
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DllPlugin({
      path: resolve(__dirname, 'dist/vendors/manifest.json'),
      name: '[name]_library'
    })
  ]
};
