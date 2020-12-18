const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        /**
         * The above order of loaders should be maintained: 'style-loader' comes first and followed by 'css-loader'.
         * If this convention is not followed, webpack is likely to throw errors.
         */
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
