const Path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    target: 'node',
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: Path.resolve(__dirname, 'build')
    },
    externals: [nodeExternals()],
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            options: {
                presets: ["@babel/preset-react"],
            },
        }],
    },
}