const db = require('../../database/models/index');
const bcrypt = require('bcryptjs')

module.exports = {
    allUsers: (req,res) =>{
        db.User.findAll()
        .then(usuarios => {
            res.json({
                meta: {
                    status: 200,
                    count: usuarios.length
                },
                data: {
                    users: usuarios
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
        .then(response => {
            if(response){
                res.json({
                    meta: {
                        status: 200
                    },
                    data: {
                        users: response
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
            avatar: (typeof req.file == 'undefined')? null : req.body.avatar
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