module.exports = {
    entry: {
        'indexEntry': './src/js/app.js',
        'mapEntry': './src/js/map.js',
        'sliderEntry': './src/js/slider.js'
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
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: ['file-loader?hash=sha512&digest=hex&name=[hash].[ext]', 'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false']
            }
        ]
    }
}
