const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
   entry: "./js/main.ts",
   devtool: "inline-source-map",
   mode: 'development',

   module: {
   rules: [
       {
       test: /\.tsx?$/,
       loader: 'ts-loader',
       options: {
       transpileOnly: true
 }
 }
  ]
 },
 resolve: {
 extensions: [".tsx", ".ts", ".js"]
 },
 devServer: {
   static: { 
   directory: path.join(__dirname, 'dist'), 
     },
     compress: true,
     port: 8080
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
     new CleanWebpackPlugin(),
     new HtmlWebpackPlugin({
     title: "Development"
     })
   ],

   // 💡 STEP 1: Update 'output' to name dynamic chunks
   output: {
     filename: "[name].bundle.js", // Use [name] for entry points
     path: path.resolve(__dirname, "dist"),
     chunkFilename: "[name].chunk.js" // ⬅️ REQUIRED: Defines how dynamically imported files are named
  },

// 💡 STEP 2: Add 'optimization' to configure chunk splitting
  optimization: {
   splitChunks: {
     chunks: 'all', // Instructs Webpack to apply optimization across all chunks
 },
   },
};