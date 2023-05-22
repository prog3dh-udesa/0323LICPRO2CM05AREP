const db = require('../database/models/index')
const bcrypt = require('bcryptjs')

const controller = {
    login: function(req, res){
        res.render('login', {usuarioLogueado: false})
    },
    register: function(req, res){
        res.render('register', {usuarioLogueado: false})
    },
    profile: function(req, res){
        let id = req.params.id
        db.Users.findByPk(id)
        .then(function(user){
            res.render(
                'profile', 
                {
                    usuarioLogueado: true,
                    data: user
                }
            )
        })
        .catch(function(err){
            console.log(err)
        })
    },
    edit: function(req, res){
        let id =  req.params.id
        db.Users.findByPk(id)
        .then(function(user){
            res.render(
                'edit-profile', 
                {
                    usuarioLogueado: true,
                    data: user
                }
            )
        })
        .catch(function(err){
            console.log(err)
        })
    },
    createUser: function (req, res){
        let{name, email, password} = req.body

        let passEncriptada = bcrypt.hashSync(password, 12)
        
        db.Users.create({
            name,
            email,
            password: passEncriptada
        })
        .then(function(data){
            console.log(data)
        })
        .catch(function(err){
            res.send('cagaste')
        })

    },
    checkUser: function(req, res){
        let {email, password} = req.body
        
        db.Users.findOne({
            where:{
                email: email
            },
            raw:true
        })
        .then(function(user){
            let validacionPass = bcrypt.compareSync(password, user.password)
            if(validacionPass){
                res.redirect('/users/profile/' + user.id)
            } else {
                res.render('login', {usuarioLogueado: false, errorPassword: true})
            }
        })
        .catch(function(err){
            console.log(err)
        })
    },
    update: function(req, res){
        let id = req.params.id
        let {name, email} = req.body
        console.log(req.body)

        console.log(name)
        console.log(email)

        db.Users.update({
            name: name,
            email: email
        }, {
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
        db.Users.destroy( {
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