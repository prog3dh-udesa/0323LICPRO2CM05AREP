var express = require('express');
var router = express.Router();
const controller = require('../controllers/usersController')


router.get('/login', controller.login)
router.post('/login', controller.checkUser)

router.get('/register', controller.register)
router.post('/register', controller.create)

router.get('/profile', controller.profile)
router.post('/delete/:id', controller.delete)

router.get('/edit-profile/:id', controller.edit)
router.post('/edit-profile/:id', controller.update)

module.exports = router;
