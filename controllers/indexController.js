

// let productos = require("../db/productsData")
let user = require("../db/usersData")
let db = require("../database/models")
let op = db.Sequelize.Op
let indexController = {
  
    home: (req, res)=> {
        db.Car.findAll({
          include:[{
            association: 'user'
          },
          {
            association:'comment'
          }
        ]
        }).then(productos =>{
          //res.send(productos);
         res.render('index', { title: 'Express', products : productos});
        })
        
      }, //vmpaolpr
      
    search: (req, res)=> {
      let search = req.query.search
      db.Car.findAll({
        where:[{
          car_brand:{
            [op.like]: '%' + search + '%'
          }
        }]
      }).then(productos =>{
        res.render('search-results', { title: 'Express', products : productos,});
      })
    }
} 

module.exports = indexController