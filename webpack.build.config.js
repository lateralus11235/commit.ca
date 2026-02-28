const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { WebpackManifestPlugin } = require('webpack-manifest-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: {
    main: [path.join(__dirname, '_assets/js/app.js'), path.join(__dirname, '_assets/scss/app.scss')]
  },
  output: {
    path: path.join(__dirname, 'assets'),
    filename: 'js/app.[contenthash].js',
    publicPath: '/assets/'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: false
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: false
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.(eot|otf|ttf|woff|woff2)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]'
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'media/[name][ext]'
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['css/*', 'js/*']
    }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/app.[contenthash].css'
    }),
    new WebpackManifestPlugin({
      fileName: '../_data/manifest/manifest.json',
      generate: (_seed, files) => {
        const manifest = {}
        files.forEach((file) => {
          const normalizedPath = file.path.replace(/^auto\//, '').replace(/^\//, '')
          const noAssetsPrefix = normalizedPath.replace(/^assets\//, '')
          if (file.name === 'main.js' || file.name === 'main.css' || file.name === 'main.js.map' || file.name === 'main.css.map') {
            manifest[file.name] = noAssetsPrefix
          } else {
            manifest[`/${noAssetsPrefix}`] = `/${noAssetsPrefix}`
          }
        })
        return manifest
      }
    })
  ],
  devtool: 'source-map'
}
