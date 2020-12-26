module.exports = {
    home: (req, res) => {
        res.render('index')
    },
    carrito: (req, res) => {
        res.render('carrito')
    },
    login: (req, res) => {
        res.render('login')
    }
}