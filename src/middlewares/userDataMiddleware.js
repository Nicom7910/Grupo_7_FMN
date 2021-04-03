const db = require('../database/models/index')

module.exports = (req, res, next) => {
    if(req.session.user != undefined){
        //esto es en caso de haberse creado la cuenta, sobreescribimos la session
        if (req.session.user.id == undefined) {
            console.log(req.session.user)
            db.User.findOne({
                where: {
                    email : req.session.user.email
                }
            })
            .then(response => {
                req.session.user = {
                    id: response.id,
                    email: response.email,
                    name: response.name,
                    avatar: response.avatar
                }
            })
        }
        res.locals.user = req.session.user
    }
    next();
}
