// 1. Importación de modelo.
const Project = require("./../models/Project")

exports.create = async (req, res) => {
    // Creamos variables y asignamos valores.
    const {
        name,
        url,
        github,
        description,
        technologies,
        image,
        demo
    } = req.body

    // Crear un lugar en base de datos
    try {
        const newProject = await Project.create({
            name, 
            url,
            github,
            description,
            technologies,
            image,
            demo
        })

        // Devolver una respuesta en formato Json
        res.json({
            msg: "Project created",
            data: newProject
        })

    } catch(error) {

        res.status(500).json({
            msg: "There was an error creating a project",
            error: error
        })
    }
}

exports.readAll = async (req, res) => {

    try {
        const projects = await Project.find({})

        res.json({
            msg: "Projects successfully obtained",
            data: projects
        })
        
    } catch (error) {

        res.status(500).json({
            msg: "There was an error getting the data",
            error: error
        })
        
    }
}

exports.readOne = async (req, res) => {

    const { id } = req.params

    try {
        const project = await Project.findById(id)

        res.json({
            msg: "Project obtained succesfully",
            data: project
        })

    } catch (error) {
        
        res.status(500).json({
            msg: "There was an error obtained the data",
            error: error
        })
    }
}