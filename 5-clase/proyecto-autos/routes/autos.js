const express = require('express')
const router = express.Router()
const autosController = require('../controllers/autosController')

router.get('/', autosController.index )
router.get('/products/:color', autosController.porColor )
router.get('/brands/:name', autosController.porMarca)
router.get('/anio/:anio', autosController.porAnio)
module.exports = router