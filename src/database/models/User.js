module.exports = (sequelize, dataTypes) => {
    let alias = 'User';

    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        last_name: {
            type: dataTypes.STRING(100),
            allowNull: true
        },
        email: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        password: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        avatar: {
            type: dataTypes.TEXT
        },
        country: {
            type: dataTypes.STRING(100),
            allowNull: true
        },
        province: {
            type: dataTypes.STRING(100),
            allowNull: true
        },
        adress: {
            type: dataTypes.STRING(100),
            allowNull: true
        },
        city: {
            type: dataTypes.STRING(100),
            allowNull: true
        },
        admin: {
            type: dataTypes.ENUM('admin', 'user'),
        },
    }

    let config = {
        tableName: 'user',
        timestamps: false
    }

    const User = sequelize.define(alias, cols, config);

    User.associate = function(models) {
        User.belongsToMany(models.Product , {
            as: 'product',
            through: 'sale',
            foreignKey: 'user_id',
            otherKey: 'product_id',
            timestamps: true
        })
    }

    return User;
}