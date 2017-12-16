const log = require('./logger.js')

const { put } = require('crocks/State')

// const putState = state =>
//  State(() => Pair(Unit(), state))

// const reset = () => 
//  putState('Grand Canyon')
//
const reset = () =>
  put('Grand Canyon')

log(
  reset()
    .execWith('Evergreen')
)
