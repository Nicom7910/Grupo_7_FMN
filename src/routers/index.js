const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');

const registerValidation = require('../middlewares/registerValidation');
const multerRegister = require('../middlewares/multerSettings/multerRegister');
const guestMiddleware = require('../middlewares/guestMiddleware');
const checkedUserMiddleware = require('../middlewares/checkedUserMiddleware');
const userDataMiddleware = require('../middlewares/userDataMiddleware');
const loginValidation = require('../middlewares/loginValidation');
const accountValidation = require('../middlewares/AccountValidation');

router.get('/', userDataMiddleware, indexController.home);
router.get('/index.html', userDataMiddleware, indexController.home);

router.get('/carrito', checkedUserMiddleware, indexController.carrito);

router.post('/carrito/vaciar', indexController.deleteCart);

router.get('/cuenta', checkedUserMiddleware, indexController.account);
router.post('/cuenta/edit/:id',multerRegister, accountValidation ,indexController.myAccount);

router.get('/login' ,guestMiddleware, indexController.login);
router.post('/login' , loginValidation, indexController.checkUser);

router.get('/register', guestMiddleware ,indexController.register);
router.post('/register', multerRegister , registerValidation, indexController.createUser);

router.get('/cerrar-sesion', indexController.logout)

module.exports = router;
