const log = require('./logger.js')

const State = require('crocks/State')
const { get, modify } = State

const constant = require('crocks/combinators/constant')

const { add, inc } = require('./helpers.js')

// compute :: Number -> State Number
const compute = n =>
  State.of(n)
    .chain(addState)
    .chain(incState)
    .chain(addState)

const addState = n =>
  get(add(n))

const incState = n =>
  modify(inc)
    .map(constant(n))

log(
  compute(10)
    .runWith(2)
)

