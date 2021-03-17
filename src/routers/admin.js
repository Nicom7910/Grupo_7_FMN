const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController')
const multer = require('../middlewares/multerSettings/multerCreateProduct');

const checkedUser = require('../middlewares/checkedUserMiddleware');
const checkedAdmin = require('../middlewares/checkedAdmin');

const productValidation = require('../middlewares/validator/productValidation');


router.get('/',adminController.home);

router.get('/crear', adminController.upload);
router.post('/crear', multer, productValidation, adminController.create);

router.get('/actualizar/:id', adminController.update);
router.post('/actualizar/:id', multer, productValidation, adminController.change);

router.post('/borrar/:id', adminController.remove)


module.exports = router;