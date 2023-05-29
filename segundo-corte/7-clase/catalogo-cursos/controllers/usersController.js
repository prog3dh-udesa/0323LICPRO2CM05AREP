const db = require('../database/models/index')
const bcrypt = require('bcryptjs')
const controller = {
    login: function(req, res){
        res.render('login')
    },
    register: function(req, res){
        console.log(req.session)
        res.render('register')
    },
    profile: function(req, res){
        let id = req.session.user.id
        db.Users.findByPk(id)
        .then(function(user){
            res.render('profile', {
                usuarioLogueado:true, 
            })
        })
        .catch(function(err){
            console.log(err)
        })
    },
    edit: function(req, res){
        let id = req.params.id

        db.Users.findByPk(id)
        .then(function(user){
            res.render('edit-profile', {
                user:user
            })
        })
        .catch(function(err){
            console.log(err)
        })
    },
    create: function(req, res){
        // let name = req.body.name
        // let email = req.body.email
        // let password = req.body.password
        let {name, email, password} = req.body

        let passEncriptada = bcrypt.hashSync(password, 12)
        db.Users.create({
            name,
            email,
            password: passEncriptada
        })
        .then( function(resp){
            console.log(resp.id)
            res.redirect('/users/profile')
        })
        .catch(function(error){
            console.log(error)
        })
    },
    checkUser: function(req, res){
        let {email, password, rememberMe} = req.body
        db.Users.findOne({
            where:{
                email
            },
            raw:true
        })
        .then(function(user){
            let comparacionPassword = bcrypt.compareSync(password, user.password)
            if(comparacionPassword){
                req.session.user = {
                    id: user.id,
                    name: user.name,
                    email:user.email
                }

                if(rememberMe === 'on'){
                    res.cookie(
                        'rememberUser', 
                        {
                            id: user.id,
                            name: user.name,
                            email:user.email
                        },
                        {
                            maxAge: 1000 * 60 * 15
                        }
                    )
                }

                //En esta redirección estamos mandando la pk del usuario, pero
                //pronto no lo vamos a necesitar mas
                //res.redirect('/users/profile/' + user.id)
                res.redirect('/users/profile')
            }
        })
        .catch(function(err){
            console.log(err)
        })
    },
    update: function(req, res){
        let id = req.params.id
        let {name, email} = req.body
        db.Users.update({
            name:name,
            email:email
        },{
            where:{
                id: id
            }
        })
        .then(function(resp){
            res.redirect('/users/profile/' + id)
        })
        .catch(function(err){
            console.log(err)
        })
    },
    delete: function(req, res){
        let id = req.params.id

        db.Users.destroy({
            where:{
                id: id
            }
        })
        .then(function(resp){
            res.redirect('/')
        })
        .catch(function(err){
            console.log(err)
        })
    }
}

module.exports = controller