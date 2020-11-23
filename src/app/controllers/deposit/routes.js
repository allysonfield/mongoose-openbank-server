const express = require('express')

const routesDeposit = express.Router()

const Middleware = require('../../middlewares/auth')
const deposit = require('.')

/**
 * @swagger
 * tags:
 *  name: Movement
 *  description: Movement routes
 * # schemes:
 * # - http
 * paths:
 *  /movement/deposit:
 *    post:
 *      tags:
 *      - movement
 *      description: importa dados de CDA
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
 *  name: Movement
 *  description: Movement routes
 * # schemes:
 * # - http
 * paths:
 *  /movement/transfersend:
 *    post:
 *      tags:
 *      - movement
 *      description: Send Transfer
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
 *              cpf:
 *                type: string
 *                example: '00658050210'
 *              agency:
 *                type: string
 *                example: '0001'
 *              account:
 *                type: string
 *                example: '21d2d1dfs1f'
 *      responses:
 *        '200':
 *          description: A successful response
 *      security:
 *      - Bearer: []
 */

/**
 * @swagger
 * tags:
 *  name: Movement
 *  description: Movement routes
 * # schemes:
 * # - http
 * paths:
 *  /movement/transferreceive:
 *    post:
 *      tags:
 *      - movement
 *      description: Receive Transfer
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
 *              user_id_send_receive:
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
 *  name: Movement
 *  description: Movement routes
 * # schemes:
 * # - http
 * paths:
 *  /movement/list/{user_id}:
 *    get:
 *      tags:
 *      - Movement
 *      description: Total deposits
 *      parameters:
 *        - name: user_id
 *          in: path
 *          required: true
 *      responses:
 *        '200':
 *          description: A successful response
 */

/**
 * @swagger
 * tags:
 *  name: Movement
 *  description: Movement routes
 * # schemes:
 * # - http
 * paths:
 *  /movement/all/{user_id}:
 *    get:
 *      tags:
 *      - Movement
 *      description: All amounts
 *      parameters:
 *        - name: user_id
 *          in: path
 *          required: true
 *      responses:
 *        '200':
 *          description: A successful response
 */
routesDeposit.post('/deposit', Middleware, deposit.deposit)

routesDeposit.post('/transfersend', Middleware, deposit.transfer_send)
routesDeposit.post('/transferreceive', Middleware, deposit.transfer_receive)

routesDeposit.get('/list/:user_id', Middleware, deposit.all)
routesDeposit.get('/all/:user_id', Middleware, deposit.index)

module.exports = routesDeposit
