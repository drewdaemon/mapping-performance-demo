const ArcGISPlugin = require("@arcgis/webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

// add it to config
module.exports = {
  plugins: [
    new ArcGISPlugin(),
    new HtmlWebpackPlugin({
      title: 'Mapping Performance Demo'
    }),
    new Dotenv()
  ]
}