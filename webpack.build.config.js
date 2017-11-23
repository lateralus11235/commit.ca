const path = require('path');
const webpack = require('webpack')
const WebpackShellPlugin = require('webpack-shell-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: [ path.join(__dirname, '_assets/js/app.js'), path.join(__dirname, '_assets/scss/app.scss')],
    output: {
        path: path.join(__dirname, 'assets'),
        filename: 'js/app.[hash].js',
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
                  "presets": ["es2015", "react", "stage-2"],
                  "plugins": ["transform-object-rest-spread"]
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
                use: ['file-loader?name=/media/[name].[ext]',
                  {
                    loader: 'image-webpack-loader',
                    options: {
                      bypassOnDebug: true,
                    },
                  }
                ],
                include: path.resolve(__dirname, '_assets/media')
            }
        ]
    },
    plugins: [

        //new UglifyJsPlugin(),
        new ExtractTextPlugin('css/app.[hash].css'),
        // https://stackoverflow.com/a/39283602/903011
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new WebpackShellPlugin({onBuildEnd:['jekyll b']}),
        new ManifestPlugin({
          fileName: '../_data/manifest/manifest.json'
        }),
        new CleanWebpackPlugin(['./assets/css', './assets/js'])
        //new CleanWebpackPlugin(['/js','/css'])
    ],
    devtool: process.env.NODE_ENV === 'production' ? '#source-map' : '#eval-source-map'
}
