const db = require('../database/models/index')

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
    checkUser: (req, res) => {

    },
    register: (req, res) => {
        res.render('login')
    },
    createUser: (req, res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            db.Users.create( {
                name: req.body.nombre,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password , 12),
                avatar: (typeof req.file == undefined)? req.file.filename : null
            })
            .then(usuario => {
                return res.redirect('/')
            })
        } else {          
            return res.render('login', {errors : errors.mapped()})
        }
    }
    }
