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
  limits: {fileSize: 5000000},
  fileFilter: (req, file, cb) => {
    if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error('Solo podés cargar fotos con formato png, jpg o jpeg'));
    }
  }
}).single('photo')

module.exports = upload;
