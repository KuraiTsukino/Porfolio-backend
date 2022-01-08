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