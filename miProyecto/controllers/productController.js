let productos = require("../db/productsData")
let user = require("../db/usersData")
let productController = {
    detail: (req, res)=> {
      let indice = req.params.indice
        res.render('product', { title: 'Detalle de Producto' ,product: productos[indice]});
      },
      add: (req, res)=> {
        res.render('product-add', { title: 'Agregar producto', user:user });
      }
}
module.exports = productController