

let products = require("../db/productsData")
let user = require("../db/usersData")
let db = require("../database/models")
let bcrypt = require("bcryptjs")

let userController = {
    register: (req, res)=> {
        res.render('register', { title: 'Express' });
      },
      login: (req, res)=> {
        res.render('login', { title: 'Express' });
      },
      loginForm: (req, res)=> {
        db.User.findOne({
          where: [{email:req.body.email}]
        }).then(user=>{
          if(!user){
            res.send(" NO HAY NINGUN USUARIO CON ESE MAIL")
          }else if(bcrypt.compareSync(req.body.password, user.password) == false){
            res.send("LA CONTRASEÑA ES INCORRECTA")
          }else{
            req.session.user = user
          }
          if(req.body.remember){
            res.cookie('userId', user.id, {
              maxAge: 1000*60*100
            })
          }
          return res.redirect('/')
        })
      },
      logout: function(req,res){
        // Destruir la sessión
        req.session.destroy();

        // Destruir la cookie
        res.clearCookie('userId');
        
        // Redireccionar a home
        return res.redirect('/')
    },
      profile: (req, res)=> {
        res.render('profile', { title: 'Express' , user: user , products:products});
      },
      edit: (req, res)=> {
        res.render('profile-edit', { title: 'Express', user: user });
      },
      storeUser: (req, res)=> {
        db.User.findOne({
          where:[
            {
              email:req.body.email
            }
          ]
        }).then(user=>{
          if(!user){
            let usuario ={
              username:req.body.username,
              email:req.body.email,
              password:bcrypt.hashSync(req.body.password,10),
              birthday:req.body.birthday,
              img:"",
            }
            db.User.create(usuario)
            .then(info =>{
              return res.redirect('/users/login')
            }).catch(e=>{
              console.log(e)
            })
          }else{
            res.send("YA HAY UN MAIL CON ESE USUARIO")
          }
        }).catch(error=>{
          console.log(error)
        })
      }
}
module.exports = userController