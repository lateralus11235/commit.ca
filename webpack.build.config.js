const path = require('path');
const webpack = require('webpack')
const WebpackShellPlugin = require('webpack-shell-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: [ path.join(__dirname, '_assets/js/app.js'), path.join(__dirname, '_assets/scss/app.scss')],
    output: {
        path: path.join(__dirname, 'assets'),
        filename: 'js/app.js',
        publicPath: '/assets'
    },
    module: {
        rules: [{
              test: /\.vue$/,
              loader: 'vue-loader',
              exclude: path.resolve(__dirname, 'node_modules'),
              options: {
                loaders: {
                  scss: ExtractTextPlugin.extract({
                      use: 'css-loader!sass-loader',
                      fallback: 'vue-style-loader'
                  }),
                }
              },
            }
            ,{
                test: /\.js$/,
                loader: 'babel-loader',
                query:{
                  presets: ['es2015']
                },
                exclude: /node_modules(?!\/foundation-sites)/
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                      use: 'css-loader!sass-loader',
                      fallback: 'style-loader'
                  })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                      use: 'css-loader!sass-loader',
                      fallback: 'style-loader'
                  })
            },/*
            {
                test: /\.svg$/,
                loader: 'svg-url-loader',
            },*/{
                test: /\.(eot|otf|ttf|woff|woff2)$/,
                loader: 'file-loader?name=/fonts/[name].[ext]',
                include: path.resolve(__dirname, '_assets/fonts'),
            },{
                test: /\.(jpg|png|gif|svg)$/,
                loader: 'file-loader?name=/media/[name].[ext]',
                include: path.resolve(__dirname, '_assets/media'),
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('css/app.css'),
        // https://stackoverflow.com/a/39283602/903011
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new WebpackShellPlugin({onBuildStart:['jekyll b']})
    ],
    devtool: process.env.NODE_ENV === 'production' ? '#source-map' : '#eval-source-map'
}
