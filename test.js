const { fizzBuzz } = require('./fizz-buzz')
const test = require('ava')

test('Number == 1', t => {
  fizzBuzz(1)
  t.pass()
})
