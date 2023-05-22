var express = require('express');
var router = express.Router();
const controller = require('../controllers/usersController')


router.get('/login', controller.login)
router.post('/login', controller.checkUser)

router.get('/register', controller.register)
router.post('/register', controller.createUser)

router.get('/profile/:id', controller.profile)

router.get('/edit-profile/:id', controller.edit)
router.post('/edit-profile/:id', controller.update)
router.post('/delete/:id', controller.delete)

module.exports = router;
