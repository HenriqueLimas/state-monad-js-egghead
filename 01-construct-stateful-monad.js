const log = require('./logger.js')
const State = require('crocks/State')
const Pair = require('crocks/Pair')

// State s a
// (s -> (a, s))

const m = State(state => Pair('value', state))

const updateValue = value =>
  State(state => Pair(state + value, state))

const updateState = value =>
  State(state => Pair(state, state + value))


const value10 = updateValue(10)
const state10 = updateState(10)

log(value10.runWith(32))
log(state10.runWith(32))

