var express = require('express');
const userController = require('../controllers/userController');
var router = express.Router();

/* GET users listing. */
router.get('/register', userController.register);
router.post('/register', userController.storeUser); //la ruta por la que se va mandar la informacion del formulario de register
router.get('/login', userController.login);
router.post('/login', userController.loginForm);
router.post('/logout', userController.logout);
router.get('/profile/:id', userController.profile);
router.get('/edit/:id', userController.edit);
router.post('/edit', userController.storeEdit);

module.exports = router;
