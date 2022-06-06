

let products = require("../db/productsData")
let user = require("../db/usersData")
let db = require("../database/models")

let userController = {
    register: (req, res)=> {
        res.render('register', { title: 'Express' });
      },
      login: (req, res)=> {
        res.render('login', { title: 'Express' });
      },
      profile: (req, res)=> {
        res.render('profile', { title: 'Express' , user: user , products:products});
      },
      edit: (req, res)=> {
        res.render('profile-edit', { title: 'Express', user: user });
      },
      storeUser: (req, res)=> {
        
        res.send(req.body)
      }
}
module.exports = userController