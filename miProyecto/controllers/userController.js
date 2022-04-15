

let products = require("../db/productsData")
let user = require("../db/usersData")

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
      }
}
module.exports = userController