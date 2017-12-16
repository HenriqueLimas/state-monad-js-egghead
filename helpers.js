const add =
  x => y => x + y

const multiply =
  x => y => x * y

const pluralize =
  (single, plural) => num =>
    `${num} ${Math.abs(num) === 1 ? single : plural }`

const getWord =
  index => words => words.split(' ')[index] || ''

const nameify =
  first => last => `${last}, ${first}`

const inc =
  add(1)

module.exports = {
  add,
  inc,
  getWord,
  nameify,
  multiply,
  pluralize
}
