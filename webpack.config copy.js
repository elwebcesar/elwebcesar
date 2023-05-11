const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
              test: /\.css$/,
              use: ['style-loader', 'css-loader'],
              // test: /\.scss$/,
              // use: [
              //   'style-loader',
              //   'css-loader',
              //   'sass-loader'
              // ],
            },
        ],
    },
};
