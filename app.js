var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.use(express.static('pub'))
app.use(express.static('js'))

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})