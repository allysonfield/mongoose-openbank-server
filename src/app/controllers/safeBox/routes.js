const express = require('express')

const routesSafeBox = express.Router()

const Middleware = require('../../middlewares/auth')
const safe = require('.')

/**
 * @swagger
 * tags:
 *  name: SafeBox
 *  description: SafeBox routes
 * # schemes:
 * # - http
 * paths:
 *  /safe/deposit:
 *    post:
 *      tags:
 *      - SafeBox
 *      description: Deposit Safebox
 *      parameters:
 *        - name: body
 *          in: body
 *          description: Value (amount value)
 *          required: true
 *          schema:
 *            type: object
 *            properties:
 *              value:
 *                type: number
 *                example: 205.30
 *              user_id:
 *                type: string
 *                example: '5fb6aa896111843a388a4ee8'
 *      responses:
 *        '200':
 *          description: A successful response
 *      security:
 *      - Bearer: []
 */

/**
 * @swagger
 * tags:
 *  name: SafeBox
 *  description: SafeBox routes
 * # schemes:
 * # - http
 * paths:
 *  /safe/withdraw:
 *    post:
 *      tags:
 *      - SafeBox
 *      description: Withdraw Safebox
 *      parameters:
 *        - name: body
 *          in: body
 *          description: Value (amount value)
 *          required: true
 *          schema:
 *            type: object
 *            properties:
 *              value:
 *                type: number
 *                example: 205.30
 *              user_id:
 *                type: string
 *                example: '5fb6aa896111843a388a4ee8'
 *      responses:
 *        '200':
 *          description: A successful response
 *      security:
 *      - Bearer: []
 */

/**
 * @swagger
 * tags:
 *  name: SafeBox
 *  description: SafeBox routes
 * # schemes:
 * # - http
 * paths:
 *  /safe/index/{user_id}:
 *    get:
 *      tags:
 *      - SafeBox
 *      description: amount
 *      parameters:
 *        - name: user_id
 *          in: path
 *          required: true
 *      responses:
 *        '200':
 *          description: A successful response
 */

routesSafeBox.post('/deposit', Middleware, safe.safe)
routesSafeBox.post('/withdraw', Middleware, safe.withdraw)
routesSafeBox.get('/index/:user_id', Middleware, safe.index)

module.exports = routesSafeBox
