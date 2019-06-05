import webpack from 'webpack';
import { resolve } from 'path';
import NxLoadPlugins from 'next-load-plugins';

const $ = NxLoadPlugins.load();

console.log('load plugins:->', $)

export default {
  mode: process.env.NODE_ENV,
  entry: {
    'vendor-react-packages': ['react', 'react-dom'],
    'vendor-next-packages': [
      'next-js-core2',
      'next-json',
      'next-guid',
      'next-chunk'
    ]
  },
  plugins: [
    new $.CleanWebpackPlugin(),
    new webpack.DllPlugin({
      path: resolve(__dirname, 'dist/vendors/manifest.json'),
      name: '[name]_library'
    })
  ]
};
