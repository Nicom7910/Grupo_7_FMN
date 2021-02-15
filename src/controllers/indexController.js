const db = require('../database/models/index')

const bcrypt = require('bcrypt');
const {validationResult} = require('express-validator');

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
    checkUser: (req, res,next) => {
        db.Users.findOne({
            where: {
                email: req.body.email
            }
        })
        .then(user => {
            // si findOne encontro un usario, seguimos 
            if(typeof user.email != undefined) {
                if(bcrypt.compareSync(req.body.password, user.password)){
                    req.session.email = user.email;
                    req.session.name = user.name;
                    next();
                }
                else {
                    res.send('La contraseña es incorrecta')
                }
            }
            else {
                res.send('el mail ingresado no está registrado')
            }

            req.session.email = user.email;

        })
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
