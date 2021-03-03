const path = require('path');
const ArcGISPlugin = require("@arcgis/webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

// add it to config
module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
  plugins: [
    new ArcGISPlugin(),
    new HtmlWebpackPlugin({
      title: 'Mapping Performance Demo'
    }),
    new Dotenv(),
  ]
}