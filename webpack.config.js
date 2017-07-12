var AureliaWebpackPlugin = require('aurelia-webpack-plugin');
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry : {
        'app' : [],
        'aurelia' : [
            'aurelia-bootstrapper-webpack',
            'aurelia-polyfills',
            'aurelia-pal',
            'aurelia-pal-browser',
            'aurelia-binding',
            'aurelia-dependency-injection',
            'aurelia-framework',
            'aurelia-loader',
            'aurelia-loader-webpack',
            'aurelia-logging',
            'aurelia-metadata',
            'aurelia-path',
            'aurelia-task-queue',
            'aurelia-templating'
        ]
    },
    output : {
        path : './build',
        filename: 'scripts/[name].bundle.js',
        sourceMapFileName: 'scripts/[name].bundle.js.map'
    },
    module :{
        loaders : [
            {test : /\.js$/, exclude:/node_modules/, loader: "babel"},
            {test:/\.html$/, exclude:path.resolve('src/index.html'), loader: 'html'}
        ]
    },
    plugins:[
        new AureliaWebpackPlugin(),
        new webpack.optimize.CommonsChunkPlugin({ name: ['aurelia']}),
        new HtmlWebpackPlugin({
            template : 'index.html',
            chunksSortMode : 'depedency'
        })
    ],
    devserver : {
        port: 3000
    }
}