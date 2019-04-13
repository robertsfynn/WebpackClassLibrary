const path = require('path');
const package = require('./package.json');

const { name } = package;
const outputFile = `${name}.min.js`;

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: outputFile,
    library: name,
    libraryExport: 'default',
    libraryTarget: 'umd',
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }],
  },
};
