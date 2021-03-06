// If environment used is production,
// minify and do not include sourcemapping,
// otherwise it is in debug mode 
// Sourcemapping == to view consoles/use dev tool
var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.join(__dirname, "src"),
  devtool: debug ? "inline-sourcemap" : false,
  entry: "./js/main-component.js", //<-- Multiple components 
  //entry: "./js/basic-components.js", //<-- Basic components for React
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
        }
      }
    ]
  },
  output: {
    path: __dirname + "/src",
    filename: "js/components/main-component.min.js" //<-- Multiple components 
    //filename: "js/basic-components.min.js" //<-- Basic components for React
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};