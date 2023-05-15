const data = require('../data/data')
const db = require('../database/models/index')
const {
        gt : mayorQue,
        lt : menorQue,
        and,
        like
    } = db.Sequelize.Op;

const controller = {
    index: function(req, res){
        let arrPeliculas
        db.Movies.findAll({
            limit:10,
            raw:true
        })
        .then(function(data){
            arrPeliculas = data
            res.render('index', {
                peliculas: arrPeliculas,
                usuarioLogueado: false
            })
        })
        .catch(function(err){ console.log(err)})

        // db.actors.findAll()
        // .then(function(data){
        //     console.log(data)
        // })
        // .catch(function(err){
        //     console.log(err)
        // })
    }
}

module.exports = controller