const db = require('../database/models/index')

const bcrypt = require('bcrypt');
const {validationResult} = require('express-validator');
const session = require('express-session');


module.exports = {
    home: (req, res) => {
        db.Product.findAll({
            include: [{association: 'category'}]
        })
        .then(response => {
            // res.send(response)
            res.render('index', {response})
        })
    },
    carrito: (req, res) => {
        db.Sale.findAll({
            where: {
                user_id: req.session.user.id
            },
            include: [{association: 'user'}, {association: 'product'}]
        })
        .then(response => {
            //res.send(response)
            res.render('carrito', {response})
        })
        .catch(error => {
            res.send(error)
        })
    },
    deleteCart: (req, res) => {
        db.Sale.destroy({
            where: {
                user_id: req.session.user.id
            },
            include: [{association: 'user'}, {association: 'product'}]
        })
        .then(response => {
            res.redirect('/carrito')
        })
        .catch(error => {
            res.send(error)
        })
    },
    account: (req, res) => {
        db.User.findOne({
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
        db.User.update({
            last_name: req.body.lastname,
            adress: req.body.adress,
            country: req.body.country,
            province: req.body.province,
            city: req.body.city,
            avatar: (typeof req.file == 'undefined')? req.session.user.avatar : req.file.filename
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
        db.User.findOne({
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
                        name: user.name,
                        avatar: user.avatar,
                        admin: user.admin
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
            db.User.create( {
                name: req.body.nombre,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password , 12),
                avatar: (typeof req.file == 'undefined')? null : req.file.filename
            })
            .then(user => {
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
}
