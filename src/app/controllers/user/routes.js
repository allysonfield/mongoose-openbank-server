const express = require('express')
const user = require('.')

const routesUser = express.Router()
const Middleware = require('../../middlewares/auth')

/**
 * @swagger
 * tags:
 *  name: User
 *  description: User routes
 * # schemes:
 * # - http
 * paths:
 *  /user/register:
 *    post:
 *      tags:
 *      - User
 *      description: User create
 *      parameters:
 *        - name: body
 *          in: body
 *          description: User data
 *          required: true
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                example: John Doe
 *              birthdate:
 *                type: date
 *                example: 1989-12-07
 *              email:
 *                type: string
 *                example: johndoe@mail.com
 *              address:
 *                type: string
 *                example: Rua do John
 *              password:
 *                type: string
 *                example: mypass
 *              cpf:
 *                type: string
 *                example: 00011122233
 *      responses:
 *        '200':
 *          description: A successful response
 *      security:
 *      - Bearer: []
 */

/**
 * @swagger
 * tags:
 *  name: User
 *  description: User routes
 * # schemes:
 * # - http
 * paths:
 *  /user/all:
 *    get:
 *      tags:
 *      - User
 *      description: All users
 *      responses:
 *        '200':
 *          description: A successful response
 */

/**
 * @swagger
 * tags:
 *  name: User
 *  description: User routes
 * # schemes:
 * # - http
 * paths:
 *  /user/delete/{id}:
 *    delete:
 *      tags:
 *      - User
 *      description: Delete one user
 *      parameters:
 *        - name: id
 *          in: path
 *          required: true
 *      responses:
 *        '200':
 *          description: A successful response
 *      security:
 *      - Bearer: []
 */
routesUser.post('/register', user.store)
routesUser.get('/all', Middleware, user.index)
routesUser.delete('/delete/:id', Middleware, user.destroy)

module.exports = routesUser
