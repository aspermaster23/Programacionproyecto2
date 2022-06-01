module.exports = function (sequelize, dataTypes) {

    let alias = 'Car'; 
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        user_id: {
            type: dataTypes.INTEGER,
        },
        car_brand: {
            type: dataTypes.STRING,
        },
        car_color: {
            type: dataTypes.STRING,
        },
        car_type: {
            type: dataTypes.STRING,
        },
        car_description: {
            type: dataTypes.STRING,
        },
        car_year: {
            type: dataTypes.INTEGER,
        },
        car_image: {
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
        tableName: 'cars',
        timestamps: true, 
        underscored: true,    
    }

    const Car = sequelize.define(alias, cols, config);

    // Car.associate = function (models) {
    //     Car.belongsTo(models.User, {
    //         as: 'user',
    //         foreignKey: 'user_id',
    //     })

    //     Car.hasMany(models.Comment, {
    //         as: 'comment',
    //         foreignKey: 'product_id'
    //     })
    // };

    return Car;
}