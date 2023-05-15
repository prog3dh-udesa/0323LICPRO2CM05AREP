const express = require('express')
const router = express.Router()
const controller = require('../controllers/moviesController')


router.get('/:id', controller.detalle)

module.exports = router