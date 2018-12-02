//setup chai
require('babel-core/register')
require('chai/register-expect')
require('ignore-styles')
require('raf/polyfill')

process.env.NODE_ENV = 'test'


//setup the chai
var chai = require('chai')
//setup the chai-subset
var chaiSubset = require('chai-subset')
chai.use(chaiSubset)


//setup chai-as-promissed
var chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)

//setup the chai-enzyme
var chaiEnzyme = require('chai-enzyme')
chai.use(chaiEnzyme())

//setup of JSDOM
var JSDOM = require('jsdom').JSDOM
const jsdom = new JSDOM('<!doctype html><html><body></body></html>')

function copyProps(src, target) {
  const props = Object.getOwnPropertyNames(src)
    .filter(prop => typeof target[prop] === 'undefined')
    .reduce((result, prop) => ({
      ...result,
      [prop]: Object.getOwnPropertyDescriptor(src, prop),
    }), {})
  Object.defineProperties(target, props)
}

global.window = jsdom.window
global.document = window.document
global.navigator = {
  userAgent: 'node.js',
}
global.window.requestAnimationFrame = function(callback) {
  setTimeout(callback, 0);
};

copyProps(window, global)

//setup the enzyme
var Enzyme = require('enzyme')
var Adapter = require('enzyme-adapter-react-16')
Enzyme.configure({adapter: new Adapter()})