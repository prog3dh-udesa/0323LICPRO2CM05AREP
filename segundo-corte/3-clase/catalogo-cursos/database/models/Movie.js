module.exports =  function(sequelize, dataTypes){
    let alias = 'Movies'
    let columnas = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true
        },
        title:{
            type:dataTypes.STRING
        },
        rating:{
            type: dataTypes.DECIMAL
        }
    }

    let config = {
        tableName: 'movies',
        timestamps: false
    }

    
    const Movies = sequelize.define(alias, columnas, config)

    Movies.associate = function(models) {
        Movies.belongsTo(models.Genres, {
            as:'genres',
            foreignKey: 'genre_id'
        })
        
        Movies.belongsToMany(models.Actors, {
            as: 'actors',
            through: 'actor_movie',
            foreignKey:'movie_id',
            otherKey:'actor_id',
            timestamps:false
        })
    }

    return Movies
}