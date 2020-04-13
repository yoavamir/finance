const express = require('express')
const upload = require('./upload')
const cors = require('cors')

const server = express()
const IncomingForm = require('formidable').IncomingForm

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
}

server.use(cors(corsOptions))

server.post('/upload', upload)

server.listen(5000, () => {
  console.log('Server started!')
})