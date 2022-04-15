

let productos = require("../db/productsData")
let user = require("../db/usersData")
let indexController = {
    home: (req, res)=> {
        res.render('index', { title: 'Express' , products : productos});
      },
    search: (req, res)=> {
        res.render('search-results', { title: 'Express' , products : productos, user:user});
      }
}
module.exports = indexController