const path = require('path');
const fs = require('fs');
const bcrypt = require('bcrypt');
const {validationResult} = require('express-validator');

let usuarios = fs.readFileSync(path.join(__dirname , '../data/usuarios.json') , 'utf-8');
usuarios = JSON.parse(usuarios);

module.exports = {
    home: (req, res) => {
        res.render('index')

    },
    carrito: (req, res) => {
        res.render('carrito')
    },
    login: (req, res) => {
        res.render('login')
    },
    register: (req, res) => {
        res.render('register')
    },
    createUser: (req, res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            usuarios.push( {
                nombre: req.body.nombre,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password , 12)
            } )
    
            fs.writeFileSync(path.join(__dirname, '../data/usuarios.json'), JSON.stringify(usuarios, null, 4))

        } else {
            res.render('register' , {
                errors: errors.mapped()
            })
        }
    }
    }
