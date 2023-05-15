module.exports = function(sequelize, dataTypes){

    let alias = 'actors'
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
    return Actors
}