module.exports = function(sequelize, dataTypes){

    let alias = 'Actors'
    let cols = {
        id:{
            primaryKey:true,
            autoIncrement:true,
            type: dataTypes.INTEGER
        },
        first_name:{
            type: dataTypes.STRING,
            allowNull: false,
        },
        last_name:{
            type: dataTypes.STRING,
            allowNull: false,
        },
    }
    let config = {
        tableName: 'actors',
        timestamps: false,
        underScore: true
    }

    const Actors = sequelize.define(alias, cols, config)
    
    Actors.associate = function(models){
        Actors.belongsToMany(models.Movies, {
            as:'movies_actores',
            through: 'actor_movie',
            foreignKey: 'actor_id',
            otherKey:'movie_id',
            timestamps: false
        })
    }
    
    return Actors
}