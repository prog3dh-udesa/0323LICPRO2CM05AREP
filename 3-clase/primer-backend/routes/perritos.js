const express = require('express')
const router = express.Router()

router.get('/', function(req, res){
    res.send('Bienvenido a la seccion de perritos')
})
router.get('/galletas', function(req, res){
    res.send('<h1>Estas son las galletas</h1>')
})
router.get('/huesitos', function(req, res){
    res.send('<h1>Estos son los huesos</h1>')
})
router.get('/adopcion/:id?', function(req, res){
    res.send(`Esta es la pagina del perrito ${req.params.id}`)
})
module.exports = router