const data = require('../data/data')
const db = require('../database/models/index')
const op = db.Sequelize.Op

const controller = {
    index: function(req, res){
        db.Movies.findAll({
            raw: true,
            nest:true,
            include:[
                {association: 'generos'},
                {association: 'actores'}
            ]
        })
        .then(function(data){
            //console.log(data)
            res.render('index', {
                movies: data,
                usuarioLogueado: false
            })
            
        })
        .catch(function(err){ console.log(err)})

        // db.Series.findAll({raw:true})
        // .then(function(data){
        //     console.log(data)
        // })
        // .catch(function(err){
        //     console.log(err)
        // })

        // db.Actors.findOne({
        //     where: {
        //         first_name:{
        //             [op.notLike]: '%S%'
        //         }
        //     },
        //     raw:true
        // })
        // .then(function(data){
        //     console.log(data)
            
        // })
        // .then(function(err){
        //     console.log(err)
        // })

        // db.Movies.findByPk(15, {raw:true})
        // .then(function(data){
        //     console.log(data)
        // })
        // .catch(function(err){
        //     console.log(err)
        // })

        
    },
    logout: function(req, res){
        req.session.user = undefined
        res.redirect('/')
    }
}

module.exports = controller