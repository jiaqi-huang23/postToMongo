const { series, src, dest } = require('gulp');
const { bundle } = require('./webpack.js');

exports.build = series(bundle);