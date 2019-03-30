const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode:'development',
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist/js',
    publicPath: '/',
    filename: 'bundle.js',
  },
  // devServer configure
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: false,
    port: 4200
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
        
      },
      {
        test:/\.(s*)css$/,
        exclude: /node_modules/,
        use:[{
          loader: MiniCssExtractPlugin.loader,
					options: {
						name:'style.css'
					}
        },
        'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      path: path.resolve(__dirname, 'dist/'),
      filename: 'css/style.css'
    }),
  ],
  watch: true,

  devtool: 'source-map'
};