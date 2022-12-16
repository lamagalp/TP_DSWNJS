// SE ENCARGA DE CONECTAR TODAS LAS RUTAS

const { Router } = require("express") // importar express

const usuarioRoutes = require("./usuario.routes") // importar el archivo de rutas de usuarios
const medicoRoutes = require("./medico.routes") 
const pacienteRoutes = require("./paciente.routes") 

const decodeJWT = require("../middlewares/decodeJWT")


const rutas_init = () => { // aca se ponen todas las rutas que existen
  const router = Router() // crear una instancia de express.Router()

  router.use("/usuarios", decodeJWT, usuarioRoutes) // para acceder a las rutas de usuarios de la api siempre deberá empezar con /usuarios
  router.use("/medicos", medicoRoutes)
  router.use("/pacientes", pacienteRoutes)

  return router // retornar el router
};


const rutas_auth = () => {
  const router = Router()

  router.use("/auth", authRoutes)

  return router
}

module.exports = { rutas_init , rutas_auth } 
