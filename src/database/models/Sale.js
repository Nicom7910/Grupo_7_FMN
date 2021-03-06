const Manufacturer = require("./Manufacturer");

module.exports = (sequelize, dataTypes) => {
    let alias = 'Sale';

    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
        },
        user_id: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        product_id: {
            type: dataTypes.TEXT,
            allowNull: false
        },
        quantity: {
            type: dataTypes.STRING(150),
            allowNull: false
        },
        sold: {
            type: dataTypes.DATE,
            allowNull: false
        },
        paid_at: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false
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
        Sale.hasMany(models.Manufacturer, {
            as: 'manufacturer',
            foreignKey: 'manufacturer_id'
        })
    }

    Sale.associate = function(models) {
        Sale.belongsTo(models.Category, {
            as: 'manufacturer',
            foreignKey: 'manufacturer_id'
        })
    }

    return Sale;
}