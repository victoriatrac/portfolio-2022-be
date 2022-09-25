const router = require('express').Router()
const Links = require('./linksModel')

const currentTime = new Date().toLocaleTimeString()

router.get('/', (req, res, next) => {
  Links.getAllLinks()
    .then((links) => {
      res.status(200).json({
        message: `All links fetched at ${currentTime}`,
        links
      })
    })
    .catch((err) => {
      err.message = `Failed to retrieve links`,
      next(err)
    })
})

module.exports = router

//old
/*
// const express = require('express')
const Links = require('./model')
// const router = express.Router()

// const db = require('../db/db-config.js')

router.use(express.json())
app.use('/api', router)

router.get('/', async (req, res) => {
  try {
    res.json({
      status: 200,
      message: 'great success',
    })
  } catch (error) {
    console.error(error)
    return res.status(500).send('Server error')
  }
})

router.get('/links', (req, res) => {
  Links.getAllLinks()
    .then(links => {
      res.json({
        status: 200,
        message: 'links fetched',
        links
      })
    })
    .catch(err => {
      res.json({
        status: 500,
        message: `Failed to get links`,
        err
      })
    })
})

module.exports = router

*/