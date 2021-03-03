const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController')
const multer = require('../middlewares/multerSettings/multerCreateProduct');


router.get('/', adminController.home);
router.get('/actualizar/:id', adminController.update);


router.get('/crear', adminController.upload);
router.post('/crear', multer, adminController.create);

router.post('/actualizar', adminController.change);



module.exports = router;