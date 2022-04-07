var express = require('express');
const userController = require('../controllers/userController');
var router = express.Router();

/* GET users listing. */
router.get('/register', userController.register);
router.get('/login', userController.login);
router.get('/profile', userController.profile);
router.get('/edit', userController.edit);

module.exports = router;
