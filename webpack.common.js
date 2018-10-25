const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebPackPlugin = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const htmlPlugin = new HtmlWebPackPlugin({
  template: './public/index.html',
  filename: 'index.html',
});

module.exports = {
  entry: {
    app: './src/client/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src'),
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    htmlPlugin,
    new CleanWebPackPlugin(['build']),
    new webpack.HotModuleReplacementPlugin(),
    new BundleAnalyzerPlugin(),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};
