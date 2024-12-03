const { Usuarios } = require("../db");

const createUser = async (req, res) => {
    try {
      const users = req.body;
  
      // Verifica si el cuerpo es un array
      if (!Array.isArray(users) || users.length === 0) {
        return res.status(400).json({ message: "Debes enviar un array de usuarios." });
      }
  
      // Validar cada usuario en el array
      for (const user of users) {
        if (!user.nombre || !user.correo || !user.edad) {
          return res.status(400).json({ message: "Todos los campos son obligatorios para cada usuario." });
        }
      }
  
      // Crear todos los usuarios en la base de datos
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

  // Obtener todos los usuarios (GET)
const getUsers = async (req, res) => {
    try {
      const users = await Usuarios.findAll(); // Obtener todos los usuarios de la base de datos
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
  
