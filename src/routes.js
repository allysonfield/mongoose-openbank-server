const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUI = require('swagger-ui-express');
const express = require('express');
const routesDeposit = require('./app/controllers/deposit/routes');
const routesUser = require('./app/controllers/user/routes');
const routesAuthenticate = require('../src/app/controllers/authenticate/routes')
const AuthMiddleware = require('../src/app/middlewares/auth');
const routesStatement = require('./app/controllers/bankStatement/routes');
const routesAmount = require('./app/controllers/amount/routes');
const routesSafeBox = require('./app/controllers/safeBox/routes');

const routes = express.Router();

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      version: '1.0.0',
      title: '4cadia Bank Api Docs',
      description: 'Api Docs for 4cadia Bank',
      contact: {
        name: 'Allyson Monteiro',
        email: 'allysonfield2@gmail.com',
      },
      servers: ['http://localhost:3002'],
    },
    securityDefinitions: {
      Bearer: {
        description: 'Token',
        type: 'apiKey',
        name: 'Authorization',
        in: 'header',
      },
    },
  },
  apis: ['**/*routes.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
routes.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
// routes.use(AuthMiddleware);


routes.use('/movement', routesDeposit);
routes.use('/user', routesUser);
routes.use('/authenticate', routesAuthenticate);
routes.use('/statement', routesStatement);
routes.use('/amount', routesAmount)
routes.use('/safe', routesSafeBox)

routes.get('/:first/:second', (req, res) => {
  const {first, second} = req.params
  return res.json(`${first} ${second}`);
})

module.exports = routes;