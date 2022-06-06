module.exports = function (sequelize, dataTypes) {

    
    let alias = 'Comment'; 

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        car_id: {
            type: dataTypes.INTEGER,
        },
        user_id: {
            type: dataTypes.INTEGER,
        },
        comentario: {
            type: dataTypes.STRING,
        },
        created_at: {
            type: dataTypes.DATE,
        },
        updated_at: {
            type: dataTypes.DATE,
        }

    }

    let config = {
        tableName: 'comments',
        timestamps: true, // Si la tabla no tiene los campos created_at y updated_at
        underscored: true, // Si los nombres de las columnas en la db tienen guiones bajos en lugar de camelCase.        
    }

    const Comment = sequelize.define(alias, cols, config);

    Comment.associate = function (models) {
        Comment.belongsTo(models.Car, {
            as: 'car',
            foreignKey: 'car_id'
        });
        Comment.belongsTo(models.User, {
            as: 'user',
            foreignKey: 'user_id'
        })

    }

    return Comment;
}