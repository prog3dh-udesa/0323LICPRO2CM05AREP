module.exports = function (sequelize, dataTypes){

    let alias = 'Series'

    let columnas = {
        id: {
            primaryKey: true,
            type: dataTypes.INTEGER 
        },
        title:{
            allowNull: false,
            type: dataTypes.STRING
        },
        genre_id: {
            allowNull:false,
            type: dataTypes.INTEGER
        }
    }

    let configuracion = {
        underscored: true,
        timestamps: false,
        tableName:'series'
    }

    let Series = sequelize.define(alias, columnas, configuracion)
    return Series
}