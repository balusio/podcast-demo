const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    publicPath: './',
    filename: 'bundle.js'
  },
  mode: 'production',
  optimization: {
    
    minimizer: [
      new TerserPlugin({
        parallel: true,
        sourceMap: false,
        terserOptions: {
          output: {
            comments: false,
          }
        }
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test:/\.(s*)css$/,
        use:[{
          loader: MiniCssExtractPlugin.loader,
					options: {
						name:'style.css'
					}
        },
        'css-loader', 'sass-loader'],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      path:  'dist/',
      filename: 'css/style.css'
    })
 
  
  ],
  devtool: 'false'
};