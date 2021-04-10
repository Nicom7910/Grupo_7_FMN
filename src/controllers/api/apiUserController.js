const db = require('../../database/models/index');
const bcrypt = require('bcryptjs');

module.exports = {
    allUsers: (req,res) =>{
        let userList=[];
        db.User.findAll()
        .then(users => {
            res.json({
                meta: {
                    status: 200
                },
                data: {
                    count: users.length,
                    users
                }
            })
        })
        .catch(errores => {
            res.json({
                meta: {
                    status: 'error',
                    msg: errores
                }
            })
        })
    },
    oneUser: (req, res) => {
        db.User.findOne({
            where: {
                id: req.params.id
            }
        })
        .then(usuario => {
            if(usuario){
                res.json({
                    meta: {
                        status: 200
                    },
                    data: {
                        users: {
                            id: usuario.id,
                            name: usuario.name,
                            lastname: usuario.last_name,
                            country: usuario.country,
                            province: usuario.province,
                            city: usuario.city,
                            avatar: usuario.avatar
                        }
                    }
                })
            }
            else {
                res.json({
                    meta: {
                        status: 400,
                        errores: 'not found',
                    }
                })
            }

        })
        .catch(errores => {
            res.json({
                meta: {
                    status: error,
                    msg: errores
                }
            })
        })
    },
    createUser: (req, res) => {
        let salt = bcrypt.genSaltSync(12)
        let hashedPassword = bcrypt.hashSync(req.body.password , salt)
        db.User.create( {
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
            avatar: (typeof req.file == 'undefined')? req.session.user.avatar : req.body.avatar,
            admin: 'user'
        })
        .then(createdUser => {
            res.json({
                meta: {
                    status : 200
                },
                data: {
                    user: {
                        createdUser
                    }
                },
            })
        })
        .catch(err => {
            res.json({
                meta: {
                    status: 'error',
                    msg: err
                }
            })
        })
    }
}