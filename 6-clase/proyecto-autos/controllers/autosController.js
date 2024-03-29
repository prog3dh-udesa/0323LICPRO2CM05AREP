const autos = require('../db/index')
const listaAutos = autos.lista

const controlador = {
    index: function(req, res){
        res.render(
            'autos', 
            {
                titulo:'Concesionario Mcqueen',
                nombreConcesionario: 'Rayo Mcqueen',
                autos: listaAutos
            }
        )
    },
    porDetalle:function(req, res){
        let indice = req.params.indice
        res.render(
            'detalle',
            {
                titulo:listaAutos[indice].marca + ' ' + listaAutos[indice].modelo,
                auto: listaAutos[indice]
            }
        )
    },
    porColor: function(req, res){
        if(req.params.color){
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
        } else {
            res.render('color')
        }
    },
    porMarca: function(req, res){
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
    },
    porAnio:function(req, res){
        let autosEncontrados = []
        for(let i = 0; i < listaAutos.length; i++){
            if(listaAutos[i].anio.toString() === req.params.anio){
                autosEncontrados.push(listaAutos[i])
            }
        }
        if(autosEncontrados.length > 0){
            res.send(autosEncontrados)
        } else {
            res.send('No se encontraron autos de ese anho')
        }
    }
}

module.exports = controlador
