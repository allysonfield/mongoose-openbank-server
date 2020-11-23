const express = require('express')
const statement = require('.')

const routesStatement = express.Router()

const Middleware = require('../../middlewares/auth')

/**
 * @swagger
 * tags:
 *  name: Statement
 *  description: Statement routes
 * # schemes:
 * # - http
 * paths:
 *  /statement/total/{user_id}/{initDate}/{endDate}:
 *    get:
 *      tags:
 *      - Statement
 *      description: Total Statement
 *      parameters:
 *        - name: user_id
 *          in: path
 *          required: true
 *          description: ID
 *        - name: initDate
 *          in: path
 *          required: true
 *          description: initial date
 *        - name: endDate
 *          in: path
 *          required: true
 *          description: final date
 *      responses:
 *        '200':
 *          description: A successful response
 */
routesStatement.get(
  '/total/:user_id/:initDate/:endDate',
  Middleware,
  statement.all
)

module.exports = routesStatement
