const db = require('../database/models/index')

module.exports = (req, res, next) => {
    if(typeof req.cookies.remember != 'undefined' && typeof req.session.user == 'undefined') {
        console.log('hola')
        db.Users.findOne({
            where: {
                email: req.cookies.remember
            }
        })
        .then(user => {
            console.log(user.dataValues)
            req.session.user = {
                id: user.dataValues.id,
                email: user.dataValues.email,
                name: user.dataValues.name
            }
        })
        .catch(error =>{
            console.log(error)
        })
    }
    return next();
}
