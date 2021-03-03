const multer = require('multer');
const path = require('path')
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,  path.join(__dirname , '../../../public/upload/products') )
    },
    filename: function (req, file, cb) {
      cb(null, 'photo' + '-' + Date.now() + path.extname(file.originalname) )
    }
  })
   
var upload = multer({ 
  storage: storage,
  limits: {fileSize: 5000000} 
}).single('photo')

module.exports = upload;
