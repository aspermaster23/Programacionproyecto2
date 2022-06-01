

// let productos = require("../db/productsData")
let user = require("../db/usersData")
let db = require("../database/models")

let indexController = {
    home: (req, res)=> {
        db.Car.findAll().then(productos =>{
          //res.send(productos);
         res.render('index', { title: 'Express', products : productos});
        })
        
      }, //vmpaolpr
      
    search: (req, res)=> {
        res.render('search-results', { title: 'Express', products : productos, user:user});
      }
} 

module.exports = indexController