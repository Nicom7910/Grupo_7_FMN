const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');

const registerValidation = require('../middlewares/registerValidation');
const multerRegister = require('../middlewares/multerRegister');
const guestMiddleware = require('../middlewares/guestMiddleware');


router.get('/', indexController.home);
router.get('/index.html', indexController.home);

router.get('/carrito', indexController.carrito);

router.get('/cuenta', indexController.account)

router.get('/login',guestMiddleware, indexController.login);
router.post('/login' , indexController.checkUser);

router.get('/register',indexController.register);
router.post('/register', multerRegister, indexController.createUser);



module.exports = router;
