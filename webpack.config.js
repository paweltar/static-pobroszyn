module.exports = {
    entry: './src/js/app.js',
    output: {
        path: __dirname,
        filename: 'main.js'
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
