let producto = require("../db/productsData")
let user = require("../db/usersData")
let productController = {
    detail: (req, res)=> {
        res.render('product', { title: 'Detalle de Producto' ,product: producto[2]});
      },
      add: (req, res)=> {
        res.render('product-add', { title: 'Agregar producto', user:user });
      }
}
module.exports = productController