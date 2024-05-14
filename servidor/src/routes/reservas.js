const router = require("express").Router();
const reservascontroller = require("../controllers/reservascontroller");

// CONSULTAR TODOS LOS CONTENIDO
router.get("/", reservascontroller.listarreservas);

// CONSULTAR UN CONTENIDO
router.get("/:id", reservascontroller.listarreserva);

// AGREGAR CONTENIDO
router.post("/", reservascontroller.agregarreservas);

// CAMBIAR ESTADO DEL CONTENIDO
router.put("/estado/:id", reservascontroller.estadoreservas);

// MODIFICAR CONTENIDO
router.put("/:id", reservascontroller.editarreservas);


module.exports = router;
