// 1. Importaciones
const mongoose = require("mongoose")

// 2. Schema
const projectSchema = mongoose.Schema({
    name: {
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
    description: {
        type: String,
        default: ""
    },
    technologies: {
        type: [String],
        default: ""
    },
    image: {
        type: String,
        default: ""
    },
    demo: {
        type: String,
        default: ""
    },
}, {timestamps: true})

// 3. Modelo
const Project = mongoose.model("Project", projectSchema)

// 4. Exportación
module.exports = Project