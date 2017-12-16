const log = require('./logger.js')

const { get } = require('crocks/State')
const prop = require('crocks/Maybe/prop')
const option = require('crocks/pointfree/option')

const objOf  = require('crocks/helpers/objOf')
const compose  = require('crocks/helpers/compose')

const { burgers,tacos } = require('./data.js')

const defaultProp = (key, def) =>
  compose(option(def), prop(key))

const getBurgers = () =>
  get(defaultProp('burgers', 0))

const burgersToTacos = () =>
  getBurgers()
    .map(objOf('tacos'))

log(
  getBurgers()
    .evalWith(burgers)
)

log(
  burgersToTacos()
    .evalWith(burgers)
)

