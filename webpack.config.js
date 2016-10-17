var webpack = require('webpack');
var path = require('path');

//Plugins
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/index.jsx',

    output: {
        path: 'bin',
        filename: 'bundle.js',
        publicPath: '/'
    },

    resolve: {
        root: [path.resolve('./src')],
        extensions: ['', '.js', '.jsx']
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader?presets[]=es2015&presets[]=react'
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')

            }
        ]
    },

    plugins: [
        new CopyWebpackPlugin([
            {from: 'src/index.html'},
            {from: 'pics', to: 'pics'},
            {from: 'fonts', to: 'fonts'}
        ]),

        new ExtractTextPlugin('index.css', {
            allChunks: true
        })
    ]
}