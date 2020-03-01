const express = require('express')
const app = express()
const multer = require('multer')
const cors = require('cors')
const bodyParser = require('body-parser')
const crypto = require('crypto')

var path = require('path')

var storage = multer.diskStorage({
  destination: './uploads/',
  filename: function (req, file, cb) {
    crypto.pseudoRandomBytes(16, function (err, raw) {
      if (err) return cb(err)

      cb(null, file.originalname + path.extname(file.originalname))
    })
  }
})

var upload = multer({ storage: storage })
   
var upload = multer({ storage: storage })


app.use(bodyParser.json())
app.use(cors())



app.post('/upload',upload.single('photo'), (req, res) => {
    console.log('req', req.file)

    res.json({message: 'Hello'})
})

app.listen(3000, () => {
    console.log('port running')
})
