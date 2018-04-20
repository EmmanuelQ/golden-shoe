const express = require('express')
{shoe1, shoe2, shoe3, shoe4, shoe5} import 'productImages/index.js'

console.log(shoe1)
const app = express()

const shoes = {
  1: {
    
  }
}

app.get('/test-pdp', (req, res) => res.send(JSON.stringify(shoes)))

app.listen(3000, () => console.log('Listening on port 3000'))