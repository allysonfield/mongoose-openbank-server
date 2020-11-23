require('dotenv').config()
const express = require('express')
const cors = require('cors')
const db = require('./config/database')
const routes = require('./routes')

class App {
  constructor() {
    this.express = express()

    this.database()
    this.middlewares()
    this.routes()

    this.express.listen(3002, () =>
      console.log(`Sua API REST está funcionando na porta 3002 `)
    )
  }

  database() {
    db.connect()
  }

  middlewares() {
    this.express.use(express.json({ limit: '100mb', extended: true }))
    this.express.use(cors())
  }

  routes() {
    this.express.use(routes)
  }
}
module.exports = new App().express
