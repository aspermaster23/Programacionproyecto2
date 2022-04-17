

let productos = require("../db/productsData")
let user = require("../db/usersData")

let indexController = {
    home: (req, res)=> {
        res.render('index', { products : productos});
      },
      
    search: (req, res)=> {
        res.render('search-results', {  products : productos, user:user});
      }
} 

module.exports = indexController