var path = require('path');
var webpack = require('webpack');
//start with: npm run start
module.exports = {
    entry: [
    './App.js'
    ],
    output: {
        path: path.resolve("./build/js"),
        filename: 'bundle.js', //this is the default name, so you can skip it
        //at this directory our bundle file will be available
        //make sure port 8090 is used when launching webpack-dev-server
        publicPath: 'http://localhost:8090/assets'
    },
    module: {
      loaders: [
        {
          test: /.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
            presets: ['es2015', 'react']
          }
        },
        { test: /\.json$/, loader: 'json-loader' },
        {
            test: /\.scss$/,
            use: [{
                      loader: "style-loader"
                  }, {
                      loader: "css-loader"
                  }, {
                      loader: "sass-loader",
                      options: {
                        includePaths: ['./node_modules', './node_modules/grommet/node_modules']
                      }
                  }
            ],
        }]
    },
    externals: {
        //don't bundle the 'react' npm package with our bundle.js
        //but get it from a global 'React' variable
        'react': 'React'
    },
    resolve: {
        extensions: ['.js', '.jsx','.json']
    },
    node: {
      console: true,
      fs: 'empty',
      net: 'empty',
      tls: 'empty'
    },
    
    devtool: 'source-map',
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
}