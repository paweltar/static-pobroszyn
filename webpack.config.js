module.exports = {
    entry: {
        'indexEntry': './src/js/app.js',
        'mapEntry': './src/js/map.js',
        'sliderEntry': './src/js/slider.js',
        'contactEntry': './src/js/contact-form.js'
    },
    output: {
        path: __dirname,
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }, {
                test: /\.css/,
                loaders: ["style-loader", "css-loader"]
            }, {
                test: /\.(gif|png|jpe?g|svg)$/i,
                loaders: [
                    'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack-loader'
                ]
            }
        ]
    },

    imageWebpackLoader: {
    mozjpeg: {
      quality: 65
    },
    pngquant:{
      quality: "65-90",
      speed: 4
    },
    svgo:{
      plugins: [
        {
          removeViewBox: false
        },
        {
          removeEmptyAttrs: false
        }
      ]
    }
  }
}
