const autos = require('../db/index')
const listaAutos = autos.lista

let autosController = {
    sendAll: function(req, res){
        res.render('autos', {title: 'Aqui esta tu auto'})
    },
    sendByColor: function(req, res){
        let filtradosPorColor = []
        for(let i = 0; i < listaAutos.length; i++){
            if(listaAutos[i].color === req.params.color){
                filtradosPorColor.push(listaAutos[i])
            }
        }
    
        if(filtradosPorColor.length > 0){
            res.send(filtradosPorColor)
        } else {
            res.send('De ese color no tenemos')
        }
    },
    sendByBrand: function(req, res){
        let marcasFiltradas = []
        for(let i = 0; i < listaAutos.length; i++){
            if(listaAutos[i].marca === req.params.name){
                marcasFiltradas.push(listaAutos[i])
            }
        }
        if(marcasFiltradas.length > 0){
            res.send(marcasFiltradas)
        } else {
            res.send('No tenemos la marca que buscar')
        }
    }
}

module.exports = autosController