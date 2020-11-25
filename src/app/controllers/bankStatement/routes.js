const express = require('express')
const statement = require('.')

const routesStatement = express.Router()

routesStatement.get(
  '/total/:user_id/:initDate/:endDate',

  statement.all
)

module.exports = routesStatement
