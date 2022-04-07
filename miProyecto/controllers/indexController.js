

let productos = require("../db/productsData")

let indexController = {
    home: (req, res)=> {
        res.render('index', { title: 'Express' , products : productos});
      }
}
module.exports = indexController