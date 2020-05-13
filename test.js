const { fizzBuzz } = require('./fizz-buzz')
const test = require('ava')

test('Number == 1', t => {
  const result = fizzBuzz(1)
  t.deepEqual(result, [1])
})

test('Number == 2', t => {
  const result = fizzBuzz(1)
  t.deepEqual(result, [1])
})
