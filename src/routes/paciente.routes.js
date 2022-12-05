// RUTAS DE PACIENTES

const router = require("express").Router(); // importar express.Router()
const pacienteController = require('../controllers/paciente.controller') // importar el archivo de controladores de pacientes
const validate = require('../middlewares/validate') // importar el middleware de validacion de datos
const pacienteScheme = require('../middlewares/schemes/paciente.scheme') // importar el scheme de validacion de datos

router.get('/:idPaciente', pacienteController.listarInfo)
router.get('/', pacienteController.listar)
router.post('/', validate(pacienteScheme.crearPaciente), pacienteController.crear)



module.exports = router;