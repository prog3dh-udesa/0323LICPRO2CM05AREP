let db = require('../database/models/index')
let op = db.Sequelize.Op

const controller = {
    detalle: function(req, res){
        let id = req.params.id
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
        let loQueBuscoElUsuario = req.query.busqueda
        
        db.Movies.findAll({
            raw:true,
            where:{
                title:{
                    [op.like]: `%${loQueBuscoElUsuario}%`
                }
            }
        })
        .then(function(data){
            console.log(data.length)
            let obtuvimosResultados
            if(data.length > 0) {
                obtuvimosResultados = true
            } else {
                obtuvimosResultados = false
            }
            res.render(
                'search-results', 
                {
                    usuarioLogueado:false,
                    loQueBuscoElUsuario,
                    obtuvimosResultados,
                    resultados: data
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
        let {
            title, 
            release_date, 
            length, 
            rating, 
            awards, genre_id
        } = req.body

        if(
            (title !== null && title !== undefined && title !== '') 
            &&  
            (release_date  !== null && release_date !== undefined && release_date !== 'Invalid date')
            && 
            (length  !== null && length !== undefined && length !== '') 
            && 
            (rating  !== null && rating !== undefined && rating !== '') 
            && 
            (awards  !== null && awards !== undefined && awards !== '') 
            && 
            (genre_id  !== null && genre_id !== undefined && genre_id !== '0') 
        ){
            db.Movies.create({
                title: title,
                release_date,
                length,
                rating,
                awards,
                genre_id
            },{raw:true})
            .then(function(data){
                console.log(data)
            })
            .catch(function(err){
                console.log(err)
            })
            res.send('Aca vamos a llegar cuando hace post')
        } else {
            console.log('No ha completado el formulario')
        }
    }
}

module.exports = controller