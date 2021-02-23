const db = require('../database/models/index')

module.exports = (req, res, next) => {
    if(typeof req.cookies.remember != 'undefined' && typeof req.session.user == 'undefined') {
        db.Users.findOne({
            where: {
                email: req.cookies.remember
            }
        })
        .then(user => {
            req.session.user = {
                id: user.id,
                email: user.email,
                name: user.name
            }
            next()
        })
        .catch(error =>{
            console.log(error)
        })
    }
    next();
}