const db = require('../db/db-config.js')

function getAllLinks() {
  return db("links")
}

module.exports = {
  getAllLinks
}