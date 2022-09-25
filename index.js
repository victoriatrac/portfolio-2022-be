const server = require('./api/server')
const port = (process.env.PORT || 1234)

server.listen(port, ()=>{
  console.log(`\n*** server listening on port ${port}***\n`
      .rainbow)
})


// old
/*

// Express
const express = require('express')
const app = express()

// Knex
const knexConfig = require('./db/knexfile')
const knex = require('knex')({
  ...knexConfig, 
  client: 'sqlite3', 
  useNullAsDefault: true,
  connection: {filename: './db/data/db.sqlite3'}})

// Router setup
// const router = require('./api/router')
app.use(express.json({ extended: false }))

// Port variable declaration
const PORT = process.env.PORT || 1234

// Application methods
app.get('/link', (req, res) => {
  knex('links')
    .select()
    .then((links) => {
      return res.json(links)
    })
    .catch((err) => {
      console.error(err)
      return res.json({
        success: false,
        message: 'an error occurred'
      })
    })
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})

*/