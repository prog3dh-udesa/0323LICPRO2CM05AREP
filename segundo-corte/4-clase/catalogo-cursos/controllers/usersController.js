const db = require('../database/models/index')
const controller = {
    login: function(req, res){
        res.render('login', {usuarioLogueado: false})
    },
    register: function(req, res){
        res.render('register', {usuarioLogueado:false})
    },
    profile: function(req, res){
        res.render('profile')
    },
    edit: function(req, res){
        res.render('edit-profile')
    },
    create:function(req, res){
        res.redirect('/users/login')
    }
}

module.exports = controller