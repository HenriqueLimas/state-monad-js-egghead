const log = require('./logger.js')

const State = require('crocks/State')
const Pair = require('crocks/Pair')
const Unit = require('crocks/Unit')
const mapProps = require('crocks/helpers/mapProps')

const { add } = require('./helpers.js')

const state = { bubbles: 42 }

const modifyState = fn =>
  State(state => Pair(Unit(), fn(state)))

const blowBubbles = n =>
  modifyState(mapProps({ bubbles: add(n) }))

const burstBubbles = n =>
  blowBubbles(-(n))

const blowBubble = () =>
  blowBubbles(1)

log(
  burstBubbles(10)
    .execWith(state)
)
