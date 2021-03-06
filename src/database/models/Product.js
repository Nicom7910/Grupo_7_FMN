const Manufacturer = require("./Manufacturer");

module.exports = (sequelize, dataTypes) => {
    let alias = 'Product';

    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        description: {
            type: dataTypes.TEXT,
            allowNull: false
        },
        photo: {
            type: dataTypes.STRING(150),
            allowNull: false
        },
        stock: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        manufacturer_id: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        category_id: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        price: {
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
        Product.belongsTo(models.Category, {
            as: 'category',
            foreignKey: 'category_id'
        });
        Product.belongsTo(models.Manufacturer, {
            as: 'manufacturer',
            foreignKey: 'manufacturer_id'
        })
    }

    return Product;
}