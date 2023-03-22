const express = require('express')
const router = express.Router()
const controller = require('../controllers/autosController')

router.get('/', controller.sendAll)
router.get('/products', controller.sendAll)
router.get('/products/:color', controller.sendByColor)
router.get('/brands/:name', controller.sendByBrand)

module.exports = router