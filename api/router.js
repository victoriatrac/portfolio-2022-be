const express = require('express')
const Links = require('./model')
const router = express.Router()

// router.use(express.json())

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
    .then((links) => {
      res.status(200).json({
        message: `links fetched`,
        links
      })
    })
    .catch((err) => {
      err.message = `Failed to get users`
    })
})

module.exports = router