const log = require('./logger.js')

const { updateFirstName } = require('./user-with-state.js')

const user = {
  firstName: 'Bobby',
  lastName: 'Pickles',
  fullName: 'Bobby Pickles'
}

log(
  updateFirstName('Jimmy')
    .execWith(user)
)
