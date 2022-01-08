// 1. Importaciones
const express = require("express")
const router = express.Router()

const proyectoController = require("./../controllers/proyectoController")

// 2. Ruteo. Router.

// Crea un proyecto.
router.post("/create", proyectoController.create)

// Leer todos los proyectos.

// Leer un proyecto.

// Actualizar un proyecto.

// Borrar un proyecto.

// 3. Exportaciones
module.exports = router