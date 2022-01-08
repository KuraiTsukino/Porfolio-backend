// 1. Importación de modelo.
const Proyecto = require ("./../models/Proyecto")

exports.create = async (req, res) => {

    // Creamos variables y asignamos valores

    const {
        nombre,
        url,
        github,
        descripcion,
        tecnologias,
        imagen,
        demo
    } = req.body

    // Crea un lugar en base de datos
    try {
        const newProyecto = await Proyecto.create({
            nombre,
            url,
            github,
            descripcion,
            tecnologias,
            imagen,
            demo
        })

        // Devolver una respuesta en un formato Json
        res.json ({
            msg: "Proyecto creado con éxito",
            data: newProyecto
        })
    } catch (error) {

        res.status(500).json({
            msg: "Hubo un error creando el proyecto",
            error: error
        })
    }
}

exports.readAll = async (req, res) => {

    try {
        const proyectos = await Proyecto.find({})

        res.json({
            msg: "Proyectos obtenidos con éxito",
            data: proyectos
        })

    } catch (error) {
        
        res.status(500).json({
            msg: "Hubo problemas obteniendo los proyectos",
            error: error 
        })
    }
}

exports.readOne = async (req, res) => {

    const { id } = req.params

    try {
        const proyecto = await Proyecto.findById(id)

        res.json({
            msg: "Proyecto obtenido con éxito",
            data: proyecto
        })

    } catch (error) {
        
        res.status(500).json({
            msg: "Hubo un error obteniendo el proyecto",
            error: error
        })
    }
}