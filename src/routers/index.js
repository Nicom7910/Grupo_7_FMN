const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');

const registerValidation = require('../middlewares/registerValidation');
const multerRegister = require('../middlewares/multerRegister');
const guestMiddleware = require('../middlewares/guestMiddleware');
const checkedUserMiddleware = require('../middlewares/checkedUserMiddleware')

router.get('/', indexController.home);

router.get('/carrito', checkedUserMiddleware, indexController.carrito);

router.get('/cuenta', checkedUserMiddleware, indexController.account)

router.get('/login' ,guestMiddleware, indexController.login);
router.post('/login' , indexController.checkUser);

router.get('/register', guestMiddleware, registerValidation ,indexController.register);
router.post('/register', multerRegister, indexController.createUser);

router.get('/cerrar-sesion', indexController.logout)

router.get('/admin', indexController.admin)

module.exports = router;
