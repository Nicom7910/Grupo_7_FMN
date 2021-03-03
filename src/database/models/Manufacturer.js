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
        tableName: 'manufacturers',

    }

    const Manufacturer = sequelize.define(alias, cols, config);
    return Manufacturer;
}