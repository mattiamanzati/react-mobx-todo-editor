module.exports = {
    entry: './src/index.js',
    output: {
        filename: './bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/, 
                exclude: /(node_modules|bower_components)/, 
                loaders: ['babel']
            }
        ]
    }
}