const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController')
const multer = require('../middlewares/multerSettings/multerCreateProduct');

const checkedUser = require('../middlewares/checkedUserMiddleware');
const checkedAdmin = require('../middlewares/checkedAdmin');


router.get('/', checkedUser, checkedAdmin, adminController.home);

router.get('/crear', checkedUser, checkedAdmin, adminController.upload);
router.post('/crear', multer, adminController.create);

router.get('/actualizar/:id', checkedUser, checkedAdmin, adminController.update);
router.post('/actualizar/:id', multer, adminController.change);

router.post('/borrar/:id', adminController.remove)


module.exports = router;