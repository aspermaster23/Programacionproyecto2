let productos = require("../db/productsData")
let user = require("../db/usersData")
let db = require("../database/models")

let productController = {
  detail: (req, res) => {
    let indice = req.params.indice
    db.Car.findByPk(indice, {
      include: [{
          association: 'comment',
          include: {
            association: 'user'
          }
        },
        {
          association: 'user'
        }
      ]
    }).then(producto => {
      // res.send(producto)
      res.render('product', {
        title: 'Detalle de Producto',
        product: producto
      });
    })
  },
  add: (req, res) => {
    res.render('product-add', {
      title: 'Agregar producto',
      user: user
    });
  }
}
module.exports = productController