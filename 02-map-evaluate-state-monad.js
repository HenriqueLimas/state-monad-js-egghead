const log = require('./logger.js')
const { get } = require('crocks/State')
const Pair = require('crocks/Pair')
const compose = require('crocks/helpers/compose')
const { add, pluralize } = require('./helpers.js')

// State s a
// (s -> (a, s))


const makeAwesomes =
  pluralize('Awesome', 'Awesomes')

const flow = compose(makeAwesomes, add(10))

log(
  get()
    .map(flow)
    .runWith(13)
    .fst()
)
