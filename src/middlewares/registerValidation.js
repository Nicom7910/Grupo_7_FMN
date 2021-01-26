const { check } = require('express-validator');

module.exports = [
    check('email')
        .isEmail().withMessage('Tenés que ingresar un email valido'),
        
    check('password')
        .isLength( {min: 6 , max:12} ).withMessage('La contraseña debe de tener entre 6 y 12 caracteres')

]