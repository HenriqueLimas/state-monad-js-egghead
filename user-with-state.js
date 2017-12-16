const State = require('crocks/State')
const { get, modify } = State

const prop = require('crocks/Maybe/prop')

const liftA2 = require('crocks/helpers/liftA2')
const assign = require('crocks/helpers/assign')
const compose = require('crocks/helpers/compose')

const option = require('crocks/pointfree/option')

const { joinWords } = require('./helpers.js')

const propOr = (key, def) =>
  compose(option(def), prop(key))

const getFirstName = () =>
  get(propOr('firstName', ''))

const getLastName = () =>
  get(propOr('lastName', ''))

const updateFirstName = firstName =>
  modify(assign({ firstName }))
    .chain(buildFullName)

const updateFullName = fullName =>
  modify(assign({ fullName }))

const buildFullName = () =>
  liftA2(joinWords, getFirstName(), getLastName())
    .chain(updateFullName)

module.exports = {
  updateFirstName
}
