const getFlagsValue = require('./flags')

console.log(`Ola ${getFlagsValue('--name')}. ${getFlagsValue('--greeting')}}`)