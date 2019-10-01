const express = require('express')
const app = express()
const port = 3000

var telegram = require ('./telegram')

app.get('/', (req, res) => res.send('Welcome to ZephyrOS'))
app.use('/telegram', telegram)

app.listen(port, () => console.log(`ZephyrOS listening on port ${port}!`))