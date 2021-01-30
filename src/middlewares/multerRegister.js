const multer = require('multer');
const path = require('path');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,  path(__dirname , '../../public/upload') )
    },
    filename: function (req, file, cb) {
      cb(null, req.body.email + '-' + Date.now())
    }
  })
   
var upload = multer({ storage: storage })

module.exports = upload;