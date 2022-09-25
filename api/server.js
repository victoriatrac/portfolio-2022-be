const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const server = express()

const linksRouter = require('./linksRouter')

require('colors')

server.use(express.json())
server.use(morgan("dev"))
server.use(cors())

const currentTime = new Date().toLocaleTimeString()

server.use('/api/links', linksRouter)

server.get('/', (req, res) => {
  res.status(200).json({
    status: 200,
    message: `Server is running at ${currentTime}`,
    author: `Github: @victoriatrac`
  })
  // .send(`<h1>Server is working</h1>`)
})

module.exports = server