const { Usuarios } = require("../db");

const createUser = async (req, res) => {
    try {
      const users = req.body;
  

      if (!Array.isArray(users) || users.length === 0) {
        return res.status(400).json({ message: "Debes enviar un array de usuarios." });
      }
  
    
      for (const user of users) {
        if (!user.nombre || !user.correo || !user.edad) {
          return res.status(400).json({ message: "Todos los campos son obligatorios para cada usuario." });
        }
      }
  
      
      const newUsers = await Usuarios.bulkCreate(users);
  
      res.status(201).json({
        message: "Usuarios creados exitosamente",
        usuarios: newUsers,
      });
    } catch (error) {
      console.error("Error en createUsers:", error);
      res.status(500).json({ message: "Error al crear los usuarios" });
    }
  };

  
const getUsers = async (req, res) => {
    try {
      const users = await Usuarios.findAll(); 
      res.status(200).json({
        message: "Usuarios obtenidos exitosamente",
        usuarios: users,
      });
    } catch (error) {
      console.error("Error en getUsers:", error);
      res.status(500).json({ message: "Error al obtener los usuarios" });
    }
  };
  
  module.exports = { createUser,getUsers };
  
