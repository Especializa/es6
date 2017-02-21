const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextWebpackPlugin({
  filename: '[name].[contenthash:8].bundle.css',
  disable: false,
});

const config = {
  entry: {
    main: './app/index.js',
    oldMessages: './app/old-messages.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[hash:8].bundle.js',
    publicPath: '/',
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'commons',
      filename: 'commons.[hash:8].bundle.js',
      minChunks: 2,
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'app', 'index.html'),
      filename: 'index.html',
      chunks: ['main', 'commons'],
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'app', 'old-messages.html'),
      filename: 'old-messages.html',
      chunks: ['oldMessages', 'commons'],
    }),
    extractSass,
  ],
  module: {
    rules: [
      {
        loader: 'html-es6-template-loader',
        test: /\.html$/,
        exclude(filePath) {
          return filePath === path.join(__dirname, 'app', 'index.html');
        },
        query: {
          transpile: true,
        },
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015'],
        },
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/,
        loader: extractSass.extract({
          use: [
            { loader: 'css-loader' },
            { loader: 'sass-loader' },
          ],
          fallback: 'style-loader',
        }),
      },
      {
        test: /\.(jpe?g|png|gif|svg)/,
        use: [
          {
            loader: 'url-loader',
            query: {
              limit: 5000,
              name: '[name].[hash:8].[ext]',
            },
          },
          {
            loader: 'image-webpack-loader',
            query: {
              mozjpeg: {
                quality: 65,
              },
            },
          },
        ],
      },
    ],
  },
};

if (process.env.NODE_ENV === 'development') {
  config.watch = true;
  config.devtool = 'source-map';
} else if (process.env.NODE_ENV === 'hot') {
  config.devtool = 'source-map';
  config.devServer = {
    hot: true,
  };
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
}

module.exports = config;
