const path = require('path');

const config = {
  entry: './app/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};

if (process.env.NODE_ENV === 'development') {
  config.watch = true;
  config.devtool = 'source-map';
}

module.exports = config;
