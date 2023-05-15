const data = require('../data/data')

const controller = {
    index: function(req, res){
        res.render('index', {
            courses: data.courses,
            usuarioLogueado: false
        })
    }
}

module.exports = controller