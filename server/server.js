const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')


app.get('/api/product/images', (req, res) => {
  res.set('Content-Type', 'image/jpeg')
  const query = req.query.q
  sendQueryImg(query, res)
})

function sendQueryImg (query, res) {
  fs.readFile(path.join(__dirname, `/productImages/${query}.jpg`), (err, data) => {
    res.send(data)
  })
}

app.listen(3690, () => console.log('Listening on port 3000'))