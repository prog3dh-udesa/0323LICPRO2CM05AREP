const express = require('express')
const router = express.Router()
const bandasController = require('../controllers/bandasController')

router.get('/', bandasController.index)
router.get('/id/:id', bandasController.porId)
router.get('/generos/:genero?', bandasController.porGenero)


module.exports = router