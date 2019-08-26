'use strict';
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = [
    new CleanWebpackPlugin(
        {
            cleanStaleWebpackAssets: false,
            protectWebpackAssets: true,
        }
    ),
    new VueLoaderPlugin()
];
