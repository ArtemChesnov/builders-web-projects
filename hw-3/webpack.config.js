const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { resolve } = require('path');

module.exports = {
  entry: './js/index.js',
  output: {
    filename: 'main.[contenthash].js',
    path: resolve(__dirname, 'build'),
  },

  module: {
    rules: [
      {
        test: /\.(mp3|mp4)$/,
        loader: 'file-loader',
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'img-optimize-loader',
        options: {
          compress: {
            mode: 'high',
            webp: true,
            gifsicle: true,
            disableOnDevelopment: false,
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: resolve(__dirname, 'index.html') }),
    new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
    new BundleAnalyzerPlugin(),
  ],
  devServer: {
    port: 3000,
  },
};
