const router = require("express").Router();
const habitacioncontroller = require("../controllers/habitacioncontroller");

// CONSULTAR TODOS LOS CONTENIDO
router.get("/", habitacioncontroller.listarhabitaciones);

// CONSULTAR UN CONTENIDO
router.get("/:id", habitacioncontroller.listarhabitacion);

// CONSULTAR UN CONTENIDO de usuario
router.get("/user/:id", habitacioncontroller.listarhabitacionuser);


// AGREGAR CONTENIDO
router.post("/", habitacioncontroller.agregarhabitacion);

// CAMBIAR ESTADO DEL CONTENIDO
router.put("/estado/:id", habitacioncontroller.estadohabitacion);

// MODIFICAR CONTENIDO
router.put("/:id", habitacioncontroller.editarhabitacion);


module.exports = router;
