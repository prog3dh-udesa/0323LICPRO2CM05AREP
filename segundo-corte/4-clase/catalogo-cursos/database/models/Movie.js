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

    Movies.associate = function(models){
        Movies.belongsTo(models.Generos, {
            as:'generos',
            foreignKey:'genre_id'
        })
    }

    return Movies


}