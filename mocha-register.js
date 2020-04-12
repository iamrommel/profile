const path = require('path')
//configure the environment variables used in test
const dotEnvPath = path.resolve('./.tools/.env.test')
require('dotenv').config({ path: dotEnvPath })

process.env.NODE_ENV = 'test'
require('@babel/register')
require('@babel/polyfill')
require('chai/register-expect')

const chai = require('chai')
const chaiSubset = require('chai-subset')
const chaiAsPromised = require('chai-as-promised')
chai.use(chaiSubset)
chai.use(chaiAsPromised)
