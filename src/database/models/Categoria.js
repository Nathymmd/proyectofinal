module.exports = (sequelize, DataTypes) => {

    let alias = 'Categorias';

    let cols = {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: DataTypes.STRING
        },
        createdAt: {
            type: DataTypes.DATE,
        },
        updatedAt: {
            type: DataTypes.DATE,
        },
        deletedAt: {
            type: DataTypes.DATE,
        }
    };

    let config ={
        tableName: 'categorias',
    };
    
    const Categoria = sequelize.define(alias, cols, config);

    return Categoria;
}