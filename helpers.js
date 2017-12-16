const add =
  x => y => x + y

const multiply =
  x => y => x * y

const pluralize =
  (single, plural) => num =>
    `${num} ${Math.abs(num) === 1 ? single : plural }`

const inc =
  add(1)

module.exports = {
  add,
  inc,
  multiply,
  pluralize
}
