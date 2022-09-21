// Express
const express = require('express')
const app = express()

// Knex
const knexConfig = require('./db/knexfile')
const knex = require('knex')({
  ...knexConfig, 
  client: 'sqlite3', 
  useNullAsDefault: true})

  // Router setup
const router = require('./api/router')
app.use(express.json({ extended: false }))
app.use('/api', router)

const PORT = process.env.PORT || 1234

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

// app.get('/link', (req, res) => {
//   knex('links')
//     .select()
//     // .select({
//     //   id: 'id',
//     //   title: 'title'
//     // })
//     .then((links) => {
//       console.log(links)
//       return res.json(links)
//     })
//     .catch((err) => {
//       console.log(err)
//       return res.json({
//         success: false,
//         message: 'An error occurred'
//       })
//     })
// })

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})