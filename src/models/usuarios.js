const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Usuarios = sequelize.define(
    'Usuarios',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      nombre: {
        type: DataTypes.STRING(100), 
        allowNull: false 
      },
      correo: {
        type: DataTypes.STRING(100), 
        allowNull: false, 
        unique: true 
      },
      edad: {
        type: DataTypes.INTEGER, 
        allowNull: false
      },     
    },
    {
      freezeTableName: true,
      timestamps: false
    }
  );

  return Usuarios;
};
