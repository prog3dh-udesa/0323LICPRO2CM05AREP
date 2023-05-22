const db = require('../database/models/index')
const controller = {
    login: function(req, res){
        res.render('login', {usuarioLogueado:false})
    },
    register: function(req, res){
        res.render('register', {usuarioLogueado:false})
    },
    profile: function(req, res){
        res.render('profile', {usuarioLogueado:true})
    },
    edit: function(req, res){
        res.render('edit-profile', {usuarioLogueado:true})
    },
    create: function(req, res){
        // let name = req.body.name
        // let email = req.body.email
        // let password = req.body.password
        let {name, email, password} = req.body
        db.Users.create({
            name,
            email,
            password
        })
    }
}

module.exports = controller