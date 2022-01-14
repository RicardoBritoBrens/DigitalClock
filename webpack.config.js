const path = require('path');

module.exports  = {
    mode: 'development', //production
    entry: {
    main: path.resolve(__dirname, 'src/digital-clock/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].engine.js',
        clean: true
    },
    module: {
        rules: [{
            exclude: '/node_modules/', loader: 'babel-loader'
        }]
    }
}