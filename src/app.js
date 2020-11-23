const express = require('express')
const cors = require('cors')
const { default: routes } = require('./routes')

// import routes from './routes';

class App {
  constructor() {
    this.server = express()

    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.server.use(express.json({ limit: '100mb', extended: true }))
    this.server.use(cors())
  }

  routes() {
    this.server.use(routes)
  }
}

module.exports = new App().server
