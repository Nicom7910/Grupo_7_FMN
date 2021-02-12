module.exports = (sequelize, dataTypes) => {
    let alias = 'Users';

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
        }
    }

    let config = {
        tableName: 'users',
        timestapms: true,
        underscored: true,
        paranoid: true
    }

    const Users = sequelize.define(alias, cols, config);
    return Users;
}