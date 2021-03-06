module.exports = (sequelize, dataTypes) => {
    let alias = 'Manufacturer';

    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            allowNull: false
        },
        manufacturer: {
            type: dataTypes.STRING(100),
            allowNull: false
        }
    }

    let config = {
        tableName: 'manufacturer',
        timestamps: false,
        paranoid: false
    }

    const Manufacturer = sequelize.define(alias, cols, config);

    Manufacturer.assosciate = function(models) {
        Manufacturer.hasMany(models.Product, {
            as: 'products',
            foreignKey: 'manufacturer_id'
        })
    }

    return Manufacturer;
}