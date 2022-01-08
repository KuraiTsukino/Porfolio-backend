// 1. Importaciones
const express = require("express")
const router = express.Router()

const projectController = require("./../controllers/projectController")

// 2. Ruteo. Router.

// Crear un project
router.post("/create", projectController.create)

// Leer todos los project.
router.get("/readall", projectController.readAll)

// Leer un project.
router.get("/readone/:id", projectController.readOne)

// 3. Exportaciones
module.exports = router