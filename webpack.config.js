/**
 * Created by Anna on 25.10.2019.
 */
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: [
                    {
                        loader: 'file-loader?name=./assets/fonts/[name].[ext]'
                    }
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg|ico)$/,
                use: [
                    {
                        loader: 'file-loader?name=./assets/images/[name].[ext]?[hash]'
                    }
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css')
    ]
};