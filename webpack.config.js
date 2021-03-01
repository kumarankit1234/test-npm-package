const path = require('path');

module.exports = {
  entry: {
    'scribe_bundle': './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: process.env.NODE_ENV === 'production' ? '[name].min.js' : '[name].js',
    module: true
  },
  experiments: {
    outputModule: true
  }
};
