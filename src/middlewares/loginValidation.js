const { check } = require('express-validator');

module.exports = [
    check('email')
        .isEmail().withMessage('Tenés que ingresar un email valido.'),     
    check('password')
        .isLength( {min: 8} ).withMessage('La contraseña debe de tener mas de 8 caracteres.')
]