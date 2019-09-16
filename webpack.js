const path = require('path');
const webpack = require('webpack');

const config = {
    mode: 'development',
    node: {
        fs: 'empty'
    },
    target: 'node',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
          {
            test: /\.(js)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          }
        ]
      },
      resolve: {
        extensions: ['*', '.js']
      },
};

const bundle = () => {
    return new Promise(resolve => webpack(config, (err, stats) => {
        if(err) console.log('Webpack', err);
        console.log(stats.toString());
        resolve();
    }))
}

module.exports = { config , bundle };