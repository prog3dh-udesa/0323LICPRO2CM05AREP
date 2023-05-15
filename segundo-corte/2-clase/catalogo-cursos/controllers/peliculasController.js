const db = require('../database/models/index')
const controller = {
    detalle: function(req, res){
        let id= req.params.id
        db.Movies.findByPk(id, {raw:true})
        .then(function(data){
                res.render('detail', {
                    pelicula: data,
                    usuarioLogueado:false
                })
        })
        .catch(function (err){
            console.log(err)
        })

    }
}

module.exports = controller