module.exports = (req, res, next) => {
    (req.session != undefined)? res.locals.user = req.session.user: '';
    next();
}