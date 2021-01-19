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
    refresh: (req , res) =>{
        res.render('refresh')
    },
    videogames: (req, res) => {
        res.render('listado-especifico')
    },
    peripherals: (req, res) => {
        res.render('listado-especifico')
    },
    mobiles: (req, res) => {
        res.render('listado-especifico')
    }
}