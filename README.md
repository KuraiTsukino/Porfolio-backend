# Backend de Portafolio de Sandra Mena Cortés 💼 Portfolio Tsukino 💼

Utiliza las dependencias de: 

* cors
* dotenv
* express 
* mongoose.

En este Backend se encuentra parte de CRUD de los modelos de:

* Proyectos (Español) 💻
* Projects (Inglés) 💻

Se ha creado el "Index.js" donde se hace la conexión a la base de datos de Producción de MongoDB y al servidor, también aquí se establecieron los Middlewares y las rutas.

En la carpeta de "Routes" están las rutas para crear y leer los proyectos, cada uno tiene los controllers en la carpeta de "controllers".

## Modelos Proyectos y Projects  

Los modelos con las propiedades de:

* Nombre - Name
* URL - Página dónde está hospedado el proyecto.
* GitHub - Página donde está el repositorio del proyecto.
* Tecnologías - Tecnologies - Librerías, lenguajes y tecnologías que fueron usasdas en su realización
* Imagen - image - Una imagen del proyecto.
* Demo - Video de demostración del proyecto.

### Rutas de los modelos.

* Creación de proyecto. Obteniendo los datos y con un try/catch se crea un nuevo proyecto en la base de datos.

* Lectura de todos los proyectos. Con un try/catch se obtienen los datos con el método Find. 

* Lectura de un proyecto. Obteniendo el id del proyecto, con un try/catch se obtiene el dato con el método FindById.

## 🛠 Construido con 🛠

* NodeJS
* Express
* Mongoose
* JavaScript - Funciones CRUD
* MongoDB - Base de datos
* Heroku - Despliegue

# Dependencias

* cors
* dotenv

## ✒️ Autora ✒️
[Kurai Tsukino](https://github.com/KuraiTsukino) aka Sandra Mena
