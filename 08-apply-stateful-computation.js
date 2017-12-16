const log = require('./logger.js')

const { getWord, nameify } = require('./helpers.js')

const State = require('crocks/State')
const liftA2 = require('crocks/helpers/liftA2')
const { get } = State

const getFirst =
  get(getWord(0))

const getLast =
  get(getWord(1))

// const format =
//   getFirst
//     .chain(x => getLast.map(nameify(x)))

// ap :: State s (a -> b) ~> State a -> State b

// const format =
//   State.of(nameify)
//     .ap(getFirst)
//     .ap(getLast)

// const format =
//   getFirst
//     .map(nameify)
//     .ap(getLast)

const format =
  liftA2(nameify, getFirst, getLast)

log(
  format
    .evalWith('Henrique Limas')
)
