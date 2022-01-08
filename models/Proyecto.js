// 1. Importaciones
const mongoose = require("mongoose")

// 2. Schema
const proyectoSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    github: {
        type: [String],
        default: "https://github.com/KuraiTsukino"
    },
    descripcion: {
        type: String,
        default: ""
    },
    tecnologias: {
        default: ""
    },
    imagen: {
        type: String,
        default: ""
    },
    demo: {
        type: String,
        default:""
    },
}, {timestamps: true})

// 3. Modelo
const Proyecto = mongoose.model("Proyecto", proyectoSchema)

// 4. Exportación
module.exports = Proyecto