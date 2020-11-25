const express = require('express')
const authenticate = require('./index')

const routesAuthenticate = express.Router()

/**
 * @swagger
 * tags:
 *  name: Authenticate
 *  description: Authenticate routes
 * # schemes:
 * # - http
 * paths:
 *  /authenticate/login:
 *    post:
 *      tags:
 *      - Authenticate
 *      description: Session in platform
 *      parameters:
 *        - name: body
 *          in: body
 *          description: Email and Password
 *          required: true
 *          schema:
 *            type: object
 *            properties:
 *              email:
 *                type: string
 *                example: 'johndoe@gmail.com'
 *              password:
 *                type: string
 *                example: 'pass'
 *      responses:
 *        '200':
 *          description: A successful response
 *      security:
 *      - Bearer: []
 */
routesAuthenticate.post('/login', authenticate.index)

module.exports = routesAuthenticate
