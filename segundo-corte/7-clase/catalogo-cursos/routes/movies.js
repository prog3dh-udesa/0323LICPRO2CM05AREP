const express = require('express')
const router = express.Router()
const controller = require('../controllers/moviesController')


router.get('/detalle/:id', controller.detalle)

router.get('/search-results', controller.search )
router.get('/add-movie', controller.addMovie )
router.post('/add-movie/create', controller.create )

module.exports = router