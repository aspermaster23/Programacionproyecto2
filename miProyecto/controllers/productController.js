let producto = require("../db/productsData")
let productController = {
    detail: (req, res)=> {
        res.render('product', { title: 'Detalle de Producto' ,product: producto[2]});
      },
      add: (req, res)=> {
        res.render('product-add', { title: 'Agregar producto' });
      }
}
module.exports = productController