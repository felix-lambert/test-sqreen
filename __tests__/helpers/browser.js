require('babel-register')();

/*
  we can test our components in a realistic browser 
  environment using jsdom.
  Jsdom is an in-JavaScript implementation of the DOM. 
  The DOM is the document object model, which is the 
  tree of nodes that make up the UI for documents shown 
  in web browsers.
  That means that we can run our tests in environments 
  without browsers, like in Node or in continuous integration 
  environments.
 */
var jsdom = require('jsdom').jsdom;

var exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('');

/*
  The interface of the document object provides access 
  to many things such as the document type, its URL, 
  the DOM tree (including elements such as <body> or <table>), 
  while providing methods To create and manipulate each of 
  the subnodes in the document
 */
global.window = document.defaultView;

/*
  get the window object out of the document
 */
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

/*
  set globals for mocha that make access to document and window feel 
  natural in the test environment
 */
global.navigator = {
  userAgent: 'node.js'
};

documentRef = document;