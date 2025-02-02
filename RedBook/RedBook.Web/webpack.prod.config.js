﻿const merge = require('webpack-merge');
const common = require('./webpack.common.config.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(common, {
    optimization: {
        minimizer: [
            new TerserPlugin(),
            new OptimizeCSSAssetsPlugin({}),
            new UglifyJSPlugin()
        ]
    },
    plugins: [
        new CleanWebpackPlugin()
    ],
    mode: 'production'
});