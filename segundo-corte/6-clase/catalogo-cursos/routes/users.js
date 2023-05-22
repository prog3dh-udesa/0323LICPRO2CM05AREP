var express = require('express');
var router = express.Router();
const controller = require('../controllers/usersController')


router.get('/login', controller.login)

router.get('/register', controller.register)
router.post('/register', controller.create)

router.get('/profile', controller.profile)

router.get('/edit-profile', controller.edit)

module.exports = router;
