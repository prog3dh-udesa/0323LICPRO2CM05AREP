const express = require('express')
const router = express.Router()
const autos = require('../db/index')

router.get('/', function(req, res){
    res.send(autos)
})

module.exports = router
