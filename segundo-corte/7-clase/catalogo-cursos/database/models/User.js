module.exports = function( sequelize, dataTypes) {
    let alias =  'Users'
    let cols = {
        id: {
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        name:{
            type: dataTypes.STRING
        },
        password:{
            type: dataTypes.STRING
        },
        email:{
            type: dataTypes.STRING
        }
    }
    
    let config= {
        tableName:'users',
        timestamps: false
    }
    const Users = sequelize.define(alias, cols, config)
    return Users

}