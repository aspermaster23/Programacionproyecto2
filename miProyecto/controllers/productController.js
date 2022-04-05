let productController = {
    detail: (req, res)=> {
        res.render('product', { title: 'Detalle de Producto' });
      }
}
module.exports = productController