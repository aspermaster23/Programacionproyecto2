var express = require('express');
const userController = require('../controllers/userController');
var router = express.Router();

/* GET users listing. */
router.get('/register', userController.register);
router.post('/register', userController.storeUser); //la ruta por la que se va mandar la informacion del formulario de register
router.get('/login', userController.login);
router.get('/profile', userController.profile);
router.get('/edit', userController.edit);

module.exports = router;
