let productos = require("../db/productsData")
let user = require("../db/usersData")
let db = require("../database/models")

let productController = {
  add: (req, res) => {
    res.render('product-add', {
      title: 'Agregar producto',
   
    });
  },
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
  
  storeCar:(req,res)=>{
    
  
  
    let car ={
      user_id: req.body.user_id,
      car_brand: req.body.car_brand,
      car_color: req.body.car_color,
      car_type: req.body.car_type,
      car_description: req.body.car_description,
      car_year: req.body.car_year,
      car_image:req.file.filename,
      created_at:Date.now(),
    }
  
    db.Car.create(car)
    .then(info =>{
      return res.redirect('/')
    }).catch(e=>{
      console.log(e)
    })
  }
 
}
module.exports = productController