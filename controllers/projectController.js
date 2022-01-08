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