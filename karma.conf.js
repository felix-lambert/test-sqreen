var webpack = require('webpack');

module.exports = function (config) {
  config.set({
    /*
      We used browsers to say that tests should run in Chrome
     */
    browsers: ['Chrome'],
    /*
      singleRun to make tests run only once by default
      You can keep karma running in the background with: 
      karma start --no-single-run
     */
    singleRun: true,
    /* 
      frameworks to specify which testing framework we’re using
     */
    frameworks: ['mocha'],
    
    files: [
      /*
        We only need tests.webpack.js, which then requires all the necessary files
       */
      'tests.webpack.js'
    ],
    preprocessors: {
      'tests.webpack.js': ['webpack']
    },
    reporters: ['dots'],
    webpack: {
      module: {
        /* 
          We also tell Webpack to use the babel-loader for our JavaScripts. 
          This gives us all the fancy new features from ECMAScript2015 and 
          React’s JSX.
         */
        loaders: [
          {test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader'}
        ]
      },
      watch: true
    },
    webpackServer: {
      noInfo: true
    }
  });
};