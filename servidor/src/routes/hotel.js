const router = require("express").Router();
const hotelcontroller = require("../controllers/hotelcontroller");

// CONSULTAR TODOS LOS CONTENIDO
router.get("/", hotelcontroller.listarhoteles);

// CONSULTAR TODOS LOS CONTENIDO
router.get("/user", hotelcontroller.listhotelesuser);

// CONSULTAR UN CONTENIDO
router.get("/:id", hotelcontroller.listarhotel);

// CONSULTAR UN CONTENIDO segun ubicacion
router.get("/ubicacion/:ubi", hotelcontroller.listhotelesuserbus);
// AGREGAR CONTENIDO
router.post("/", hotelcontroller.agregarhotel);

// CAMBIAR ESTADO DEL CONTENIDO
router.put("/estado/:id", hotelcontroller.estadohotel);

//Agrega habitacion al hotel (suma valor numhabitaciones)
router.put("/hab/:id", hotelcontroller.anadirhab);

// MODIFICAR CONTENIDO
router.put("/:id", hotelcontroller.editarhotel);


module.exports = router;
