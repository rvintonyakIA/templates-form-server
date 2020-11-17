const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './server/index.js',

  /***
   *  Note the use of target: 'node' and externals: [nodeExternals()] from webpack-node-externals,
   *  which will omit the files from node_modules in the bundle;
   *  the server can access these files directly.
   */
  target: 'node',
  externals: [nodeExternals()],

  output: {
    path: path.resolve('dist-server'),
    filename: 'index.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  }
};
