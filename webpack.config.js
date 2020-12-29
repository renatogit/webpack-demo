const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json'],
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    open: true,
  },
  plugins: [
    // Tell CleanWebpackPlugin that we don't want to remove the index.html file after the incremental build triggered by watch
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new HtmlWebpackPlugin({
      title: 'Development',
      templateContent: () => `
      <html lang="pt-br">
        <head>
          <title>Webpack 5</title>
        </head>
        <body>
          <div id="root"></div>
        </body>
      </html>`,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.m?(js|jsx)$/,
        exclude: [path.resolve(__dirname, 'node_modules/')],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
};
