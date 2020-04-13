const IncomingForm = require('formidable').IncomingForm

module.exports = function upload(req, res) {
  var form = new IncomingForm()

  form.on('file', (field, file) => {
    res.json({'user' : 123})
  })
  form.on('end', () => {
    res.json()
  })
  form.parse(req)
}