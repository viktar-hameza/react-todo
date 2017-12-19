module.exports = {
  entry: './src/App.jsx',

  // output: {
  //   path: './public',
  //   filename: 'bundle.js'
  // },
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },
  
  devServer: {
    inline: true,
    contentBase: './public',
    port: 8080
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
        // loader: 'style!css!sass'
      }
    ]
  },

  devtool: 'source-map',

  resolve:  {
    extensions: ['*', '.js', '.jsx']
  },
};