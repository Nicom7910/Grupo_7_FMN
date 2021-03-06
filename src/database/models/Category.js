module.exports = (sequelize, dataTypes) => {
    let alias = 'Category';

    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            allowNull: false
        },
        category: {
            type: dataTypes.STRING(100),
            allowNull: false
        }
    }

    let config = {
        tableName: 'category',
        timestamps: false,
        paranoid: false
    }

    const Category = sequelize.define(alias, cols, config);

    Category.assosciate = function(models) {
        Category.hasMany(models.Product, {
            as: 'products',
            foreignKey: 'category_id'
        })
    }


    return Category;
}