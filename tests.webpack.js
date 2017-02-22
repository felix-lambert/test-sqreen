/*
  This tells Webpack to consider anything with a -test suffix to 
  be part of the test suite.
 */
var context = require.context('./__tests__', true, /-test\.js?$/);
context.keys().forEach(context);