let productController = {
    detail: (req, res)=> {
        res.render('product', { title: 'Detalle de Producto' });
      },
      add: (req, res)=> {
        res.render('product-add', { title: 'Agregar producto' });
      }
}
module.exports = productController