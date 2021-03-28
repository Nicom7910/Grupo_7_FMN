const db = require('../../database/models/index');

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
                    status: error,
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
    }
}