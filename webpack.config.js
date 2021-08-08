const Dotenv = require('dotenv-webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.jsx',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  // env: {
  //   SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
  // },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.(js|jsx)$/i,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  node: {
    net: 'empty',
    fs: 'empty',
    tls: 'empty',
    dns: 'empty',

  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: './src/index.html',
    }),
    new Dotenv(),
  ],
};
