const express = require('express')
const amount = require('.')

const routesAmount = express.Router()

const Middleware = require('../../middlewares/auth')

/**
 * @swagger
 * tags:
 *  name: Amount
 *  description: Amount routes
 * # schemes:
 * # - http
 * paths:
 *  /amount/index/{user_id}:
 *    get:
 *      tags:
 *      - Amount
 *      description: Amount
 *      parameters:
 *        - name: user_id
 *          in: path
 *          required: true
 *          description: User ID
 *      responses:
 *        '200':
 *          description: A successful response
 *      security:
 *      - Bearer: []
 */
routesAmount.get('/index/:user_id', Middleware, amount.index)

module.exports = routesAmount
