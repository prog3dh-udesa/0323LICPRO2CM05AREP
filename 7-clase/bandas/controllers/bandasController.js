const data = require('../db/index')

const controller = {
    index: function(req, res){
        res.render('todas', {listaBandas: data.lista})
    },
    porId: function(req, res){
        let bandaEncontrada

        for(let i = 0; i < data.lista.length; i++){
            if(req.params.id === data.lista[i].id.toString()){
                bandaEncontrada = data.lista[i]
            }
        }

        if(bandaEncontrada !== undefined){
            res.render('detalle', {banda: bandaEncontrada})
        } else {
            res.send('No encontramos tu banda')
        }
    },
    porGenero: function(req, res){
        let bandasEncontradas = []
        for(let i = 0; i < data.lista.length; i++ ){
            if(req.params.genero === data.lista[i].genero.toLowerCase()){
                bandasEncontradas.push(data.lista[i])
            }
        }
        if(bandasEncontradas.length > 0){
            res.render('filtradasPorGenero', {filtradas: bandasEncontradas})
        } else {
            res.send('No encontramos bandas de ese genero')
        }
    }
}

module.exports = controller