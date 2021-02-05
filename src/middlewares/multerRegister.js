const multer = require('multer');
const path = require('path')
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,  path.join(__dirname , '../../public/upload/avatars') )
    },
    filename: function (req, file, cb) {
      cb(null, req.body.email + '-' + Date.now() + path.extname(file.originalname) )
    }
  })
   
var upload = multer({ 
  storage: storage,
  limits: {fileSize: 5000000} 
}).single('avatar')

module.exports = upload;
