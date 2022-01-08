// 1. Importaciones
const express = require("express")
const router = express.Router()

const proyectoController = require("./../controllers/proyectoController")

// 2. Ruteo. Router.

// Crea un proyecto.
router.post("/create", proyectoController.create)

// Leer todos los proyectos.
router.get("/readall", proyectoController.readAll)

// Leer un proyecto.
router.get("/readone/:id", proyectoController.readOne)

// 3. Exportaciones
module.exports = router