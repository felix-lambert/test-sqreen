
/*
  Set INTERFACE to the address that the webpack server should listen on in webpack.config.js
 */
const INTERFACE = 'localhost'
/*
  Webpack brings interesting features:
    * Have all the static resources (CSS, images, fonts) as module,
    * Integrate and consume third-party libraries very simply as a module,
    * Separate your build into multiple pieces, loaded on demand,
    * Keep an initial load very fast if needed,
    * Customize most of the steps in the process.
  It proposes a loader system which allows to transform anything and everything into JavaScript 
  (but not that). Thus, everything is consumable as a module.
  If you use the css-loader for example, all the url () directives will behave as require (), 
  so you can apply loaders to all your assets and you will have compile errors if a resource is 
  missing.
*/
module.exports = {
  entry: getEntrySources(['./src/js/entry.js']),
  output: {
    publicPath: 'http://' + INTERFACE + ':8080/',
    filename: 'build/bundle.js'
  },
  devtool: 'source-map',
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'source-map'
      }
    ],
    /*
      Webpack will be able to take care of your JavaScript modules (CommonJS, AMD, UMD ...), 
      but also your CSS modules, your SVG, gif, png, etc. files. As well as potentially any 
      file type as long as you take the time to write a loader.
     */
    loaders: [
      {
        test: /\.scss$/,
        include: /src/,
        loaders: [
            'style',
            'css',
            'autoprefixer?browsers=last 3 versions',
            'sass?outputStyle=expanded'
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'url?limit=8192',
            'img'
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loaders: [
            'react-hot',
            'babel?stage=2'
        ]
      }
    ]
  }
};

function getEntrySources(sources) {
  if (process.env.NODE_ENV !== 'production') {
    sources.push('webpack-dev-server/client?http://' + INTERFACE + ':8080');
    sources.push('webpack/hot/only-dev-server');
  }

  return sources;
}