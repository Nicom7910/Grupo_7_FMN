const { check } = require('express-validator');

module.exports = [
    check('nombre')
        .isLength( {min: 2} ).withMessage("El nombre debe tener mas de 2 caracteres.") ,
    check('lastname')
        .isLength( {min: 2} ).withMessage("El apellido debe tener mas de 2 caracteres."),
    check('email')
        .isEmail().withMessage('Tenés que ingresar un email valido.'),     
    check('adress')
        .isLength( {min: 2} ).withMessage('La direccion debe de tener mas de 2 caracteres.'),
    check('country')
        .isLength( {min: 2} ).withMessage('El pais debe de tener mas de 2 caracteres.'),
    check('province')
        .isLength( {min: 2} ).withMessage('La provincia debe de tener mas de 2 caracteres.'),
    check('city')
        .isLength( {min: 2} ).withMessage('La ciudad debe de tener mas de 2 caracteres.'),
]