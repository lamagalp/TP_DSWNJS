// RUTAS DE MEDICOS

const router = require("express").Router(); // importar express.Router()
const medicoController = require('../controllers/medico.controller') // importar el archivo de controladores de usuarios
const validate = require('../middlewares/validate') // importar el middleware de validacion de datos
const medicoScheme = require('../middlewares/schemes/medico.scheme') // importar el scheme de validacion de datos

router.get('/', medicoController.listar)
router.post('/', validate(medicoScheme.crearMedico), medicoController.crear)
router.get('/:idMedico', medicoController.listarInfo)


module.exports = router;