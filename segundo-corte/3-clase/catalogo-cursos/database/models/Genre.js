module.exports = function(sequelize, dataType){

    let alias = 'Genres'
    let cols = {
        id: {
            type: dataType.INTEGER,
            primaryKey: true
        },
        name:{
            allowNull: false,
            type: dataType.STRING
        }
    }
    let config = {
        tableName:'genres',
        timestamps:false
    }

    const Genres = sequelize.define(alias, cols, config)

    Genres.associate = function (models){
        Genres.hasMany(models.Movies, {
            as:'movies',
            foreignKey: 'genre_id'
        })
    }

    return Genres

}