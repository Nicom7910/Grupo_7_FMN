const db = require('../database/models/index')

const bcrypt = require('bcrypt');
const {validationResult} = require('express-validator');
const session = require('express-session');


module.exports = {
    home: (req, res) => {
        res.render('index')
    },
    carrito: (req, res) => {
        res.render('carrito')
    },
    account: (req, res) => {
        //res.send('Conecta base de datos')
        db.Users.findOne({
            where: {
                email: req.session.user.email
            }
        })
        .then(usuario => {
            if (usuario){
                return res.render('userAccount', {
                    usuario: usuario
                })
            }
            else{
                return res.send("El usuario no fue encontrado")
            }
        })
        .catch(() =>res.send("Esta mal"))
        
    },
    myAccount: (req,res) => {
        db.Users.update({
            lastname: req.body.lastname,
            adress: req.body.adress,
            country: req.body.country,
            province: req.body.province,
            city: req.body.city
        }, {
            where: {
                id: req.params.id
            }
        })
        .then(() => {
            //res.send(req.body)
            return res.redirect('/')
        })
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
            if(typeof user.email != undefined){
                if(bcrypt.compareSync(req.body.password, user.password)){
                    req.session.user = {
                        id: user.id,
                        email: user.email,
                        name: user.name
                    }
                    //if(typeof req.body.rememberUser == undefined){
                    if ( req.body.rememberUser != undefined ) {
                        res.cookie('remember', user.email, { maxAge: 60000})
                    }
                    return res.redirect('/')
                }else {
                    return res.send('contraseña incorrecta')
                }
            }
        })
        .catch(error => {
            res.send(error)
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
                avatar: (typeof req.file == 'undefined')? null : req.file.filename
            })
            .then(usuario => {
                
                return res.redirect('/')
            })
        } else {          
            return res.render('login', {errors : errors.mapped()})
        }
    },
    logout: (req, res) =>{
        req.session.destroy();
        res.cookie('remember', null, {maxAge: 1});
        res.redirect('/')
    },
    admin: (req, res) => {
        res.render('admin')
    }
    
}
