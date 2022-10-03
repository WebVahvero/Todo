const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
   mode: 'development',
   entry: {
    bundle: path.resolve(__dirname, 'src/index.js'),
   },
   devtool: 'inline-source-map',
   plugins: [
    new HtmlWebpackPlugin({
      title: 'Title',
    }),
  ],
   output: {
     path: path.resolve(__dirname, 'dist'),
     filename: '[name][contenthash].js',
     clean: true,
     assetModuleFilename: '[name][ext]',
   },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
 };