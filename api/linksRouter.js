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