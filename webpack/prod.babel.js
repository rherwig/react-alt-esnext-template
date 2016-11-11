import {optimize, DefinePlugin} from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import autoprefixer from 'autoprefixer';
import path from 'path';

export default {
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://0.0.0.0:8080',
        path.join(__dirname, '..', 'src', 'index')
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: path.join(__dirname, '..', 'build'),
        filename: 'app.bundle.js'
    },
    devtool: '#source-map',
    postcss: () => [autoprefixer],
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loader: 'style!css!postcss!sass',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new optimize.UglifyJsPlugin(),
        new DefinePlugin({
            'process.env': {
                'NODE_ENV': 'production'
            }
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '..', 'src', 'index.prod.html'),
            filename: 'index.html'
        })
    ]
};