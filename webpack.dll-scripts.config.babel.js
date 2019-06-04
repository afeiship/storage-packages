import webpack from 'webpack';
import { resolve } from 'path';

export default {
  mode: process.env.NODE_ENV,
  entry: {
    vendor: ['react', 'react-dom']
  },
  plugins: [
    new webpack.DllPlugin({
      path: resolve(__dirname, 'dist/vendors/manifest.json'),
      name: '[name]_library'
    })
  ]
};
