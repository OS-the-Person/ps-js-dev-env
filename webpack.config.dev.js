import path from 'path';
//import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  debug: true, // shows debugging info
  devtool: 'inline-source-map',
  noInfo: false,
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web', //what webpack is bundling for
  output: { //where bundle is saved
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [/*
    // Create HTML file that includes reference to bundled JS.
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true
    })
    */
  ],
  module: { //what files webpack should handle
    loaders: [//loaders teach webpack how to handle files
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['style','css']}
    ]
  }
}
