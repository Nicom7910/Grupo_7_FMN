module.exports = {
    productList: (req , res) =>{    
        res.render('listado')
    },
    product: (req , res) => {
        res.render('producto')
    },
    sell: (req , res) => {
        res.render('upload')
    },
    videogames: (req, res) => {
        res.render('listado')
    },
    peripherals: (req, res) => {
        res.render('listado')
    },
    mobiles: (req, res) => {
        res.render('listado')
    }
}