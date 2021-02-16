const db = require('../database/models/index')

module.exports = (req, res, next) => {
    if(req.cookies.rememberUser != undefined && req.session.user == undefined) {
        db.Users.findOne({
            where: {
                email: req.cookies.rememberUser
            }
        })
        .then(user => {
            req.cookieSession.user = {
                email: user.email,
                name: user.name,
                id: user.id
            }
        })
    }
    next();
}