module.exports = {
    productList: (req , res) =>{    
        res.render('listado')
    },
    product: (req , res) => {
        res.render('producto')
    },
    sell: (req , res) => {
        res.render('upload')
    }
}