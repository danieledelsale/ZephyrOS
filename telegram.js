var express = require('express')
var router = express.Router()

// define the home page route
router.get('/', function (req, res) {
  res.send('Hey telegram!!')
})
// define the about route
router.get('/about', function (req, res) {
  res.send('Telegram REST API')
})

module.exports = router