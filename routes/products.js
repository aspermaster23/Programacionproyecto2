var express = require('express');
var router = express.Router();

const productController = require('../controllers/productController');

let multer = require('multer');
let path = require('path');

//Configurar multer.
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../public/images/products/')) //Usamos path.join para evitar problemas de rutas. __dirname da la posición exacta de la carpeta en la que está el archivo. Luego desde ahí nos movemos hasta la carpeta public.
    //Las carpetas deben existir.
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})
 
var upload = multer({ storage: storage })



/* GET home page. */
router.get('/add', productController.add);
router.post('/comment', productController.comment);
router.post('/add',upload.single("car_image"), productController.storeCar);
router.get('/:indice', productController.detail);
module.exports = router;
