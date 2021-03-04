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
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        paid_at: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false
        }
    }

    let config = {
        tableName: 'product',
        timestapms: true,
        underscored: true,
        paranoid: true
    }

    const Product = sequelize.define(alias, cols, config);

    Product.associate = function(models) {
        Product.belongsTo(models.Manufacturer, {
            as: 'manufacturer',
            foreignKey: 'manufacturer_id'
        })
    }

    Product.associate = function(models) {
        Product.belongsTo(models.Category, {
            as: 'manufacturer',
            foreignKey: 'manufacturer_id'
        })
    }

    return Product;
}