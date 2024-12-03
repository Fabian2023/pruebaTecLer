const {Sequelize,DataTypes} = require ("sequelize")
require("dotenv").config()

const userModel=require("./models/usuarios")

const {DB_USER,DB_PASSWORD,DB_HOST,DB_NAME}= process.env




 const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
  logging: false, 
  native: false, 
});

const Usuarios = userModel(sequelize)

module.exports={
   conn: sequelize,
   Usuarios: Usuarios, 
}