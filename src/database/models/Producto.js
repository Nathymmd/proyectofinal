module.exports = (sequelize, DataTypes) => {

    let alias = 'Productos';
    
    let cols = {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nombre: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        precio: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        cantidad: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        descripcion: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        id_productoCat: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        desc2: {
            type: DataTypes.STRING(3000),
            allowNull: false
        },
        imagen: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        deleted_at: {
            type: DataTypes.DATE, 
        },

    };

    let config ={
        tableName: 'productos',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    };

    const Producto = sequelize.define(alias, cols, config);

    Producto.associate = function (models) {
        Producto.belongsTo(models.Categorias, { 
            as: "categoria",
            foreignKey: "id_productoCat"
        })
    }    

    return Producto;
}