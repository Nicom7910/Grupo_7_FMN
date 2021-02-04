const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');
const registerValidation = require('../middlewares/registerValidation')
const multerRegister = require('../middlewares/multerRegister')

router.get('/', indexController.home);
router.get('/index.html', indexController.home);

router.get('/carrito', indexController.carrito);

router.get('/login', indexController.login);

router.get('/register', indexController.register);
router.post('/register', multerRegister.single('image'),registerValidation, indexController.createUser);



module.exports = router;