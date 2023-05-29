let db = require('../database/models/index')
let op = db.Sequelize.Op
let bcrypt = require('bcryptjs')

const controller = {
    detalle: function(req, res){
        let id = req.params.id
        console.log(req.session)
        db.Movies.findByPk(id, {raw: true})
        .then(function(data){
            res.render('details', {
                usuarioLogueado:false,
                pelicula: data
            })
        })
        .catch(function(err){
            console.log(err)
        })
    },
    search: function(req, res){
        let loQueEstaBuscandoElUsuario = req.query.busqueda

        db.Movies.findAll({
            where:{
                title : {
                    [op.like]: `%${loQueEstaBuscandoElUsuario}%`
                                    //Po
                }
            },
            raw:true
        })
        .then(function(data){
            let encontroResultados
            
            if(data.length > 0){
                encontroResultados = true
            } else {
                encontroResultados = false
            }
            
            res.render(
                'search-results', 
                { 
                    usuarioLogueado: false,
                    busqueda: loQueEstaBuscandoElUsuario,
                    resultados: data,
                    encontroResultados: encontroResultados
                }
                )
        })
        .catch(function(err){
            console.log(err)
        })

    },
    addMovie: function(req, res){
        res.render('add-movie', {usuarioLogueado:true})
    },
    create: function(req, res){

        let tituloEncriptado = bcrypt.hashSync(req.body.title, 10)
        console.log(tituloEncriptado)

        let comparacion = bcrypt.compareSync('Pepe3000', tituloEncriptado)
        console.log(comparacion)

        db.Movies.create({
            title: req.body.title,
            release_date: req.body.release_date,
            rating: req.body.rating,
            genre_id: req.body.genre_id
        })
        .then(function(data){
            res.redirect('/')
        })
        .catch(function(err){
            console.log(err)
        })
    }
}

module.exports = controller