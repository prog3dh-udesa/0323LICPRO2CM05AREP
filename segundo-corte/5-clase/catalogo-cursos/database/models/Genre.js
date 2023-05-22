module.exports = function(sequelize, dataTypes){
    let alias = 'Generos'

    let cols = {
        id:{
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        name:{
            allowNull:false,
            type: dataTypes.STRING
        }
    }

    let config = {
        tableName:'genres',
        timestamps: false
    }

    const Generos = sequelize.define(alias, cols, config)

    Generos.associate = function(models){
        Generos.hasMany(models.Movies, {
            as:'movies',
            foreignKey: 'genre_id'
        })
    }

    return Generos
}