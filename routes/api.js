
const express = require('express');
const router = express.Router();
const userController = require('../components/users/users_Controller');

router.post('/register', userController.registerUser);

module.exports = router;

