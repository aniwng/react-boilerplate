const path = require('path');
const webpack = require('webpack');
const buildDirectory = './build';

module.exports = {
    entry: [
        './src/index.js'
    ],
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(buildDirectory),
        publicPath: '/build/'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.css']
    }
};