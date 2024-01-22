const express = require('express');
const router = express.Router();

const userController = require('../Controllers/userController');

router.post('/signup', userController.signup);
router.post('/login', userController.login);
router.post('/verifyotp', userController.verifyOtp);
router.post('/resendotp', userController.resendOtp)

module.exports = router;