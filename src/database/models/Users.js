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
        lastname: {
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
        tableName: 'users',
        timestamps: false
    }

    const Users = sequelize.define(alias, cols, config);
    return Users;
}