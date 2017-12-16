const log = require('./logger.js')

const State = require('crocks/State')
const { get, modify } = State

const constant = require('crocks/combinators/constant')
const composeK = require('crocks/helpers/composeK')

const { add, inc, multiply } = require('./helpers.js')


// addState :: Number -> State Number
const addState = n =>
  get(add(n))

// multiplyState :: Number -> State Number
const multiplyState = n =>
  get(multiply(n))

// incState :: Number -> State Number
const incState = n =>
  modify(inc)
    .map(constant(n))

// addAndInc :: Number -> State Number
const addAndInc = 
  composeK(incState, addState)

// compute :: Number -> State Number
const compute =
  composeK(multiplyState, addAndInc)

log(
  compute(10)
    .runWith(2)
)

