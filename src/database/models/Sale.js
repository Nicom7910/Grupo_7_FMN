const Manufacturer = require("./Manufacturer");

module.exports = (sequelize, dataTypes) => {
    let alias = 'Sale';

    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        user_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        quantity: {
            type: dataTypes.STRING(150),
            allowNull: false
        },
        sold: {
            type: dataTypes.DATE,
            allowNull: true
        },
        paid_at: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: true
        }
    }

    let config = {
        tableName: 'sale',
        timestapms: true,
        underscored: true,
        paranoid: true
    }

    const Sale = sequelize.define(alias, cols, config);

    Sale.associate = function(models) {
        Sale.belongsTo(models.User, {
            as: 'user',
            foreignKey: 'user_id'
        });
        Sale.belongsTo(models.Product, {
            as: 'product',
            foreignKey: 'product_id'
        })
    }

    return Sale;
}