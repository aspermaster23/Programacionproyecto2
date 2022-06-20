var express = require('express');
const userController = require('../controllers/userController');
var router = express.Router();

let multer = require('multer');
let path = require('path');

//Configurar multer.
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../public/images/users/')) //Usamos path.join para evitar problemas de rutas. __dirname da la posición exacta de la carpeta en la que está el archivo. Luego desde ahí nos movemos hasta la carpeta public.
    //Las carpetas deben existir.
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})
 
var upload = multer({ storage: storage })
/* GET users listing. */
router.get('/register', userController.register);
router.post('/register',upload.single("image"), userController.storeUser); //la ruta por la que se va mandar la informacion del formulario de register
router.get('/login', userController.login);
router.post('/login', userController.loginForm);
router.post('/logout', userController.logout);
router.get('/profile/:id', userController.profile);
router.get('/edit/:id', userController.edit);
router.post('/edit', userController.storeEdit);

module.exports = router;
