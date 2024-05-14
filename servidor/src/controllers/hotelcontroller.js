const modelo = require("../model/hotel");

exports.listarhoteles = async (req, res) => {
  const hotel = await modelo().listhoteles();
  res.json({ hotel });
};

exports.listhotelesuser = async (req, res) => {
  const hotel = await modelo().listhotelesuser();
  res.json({ hotel });
};

exports.listhotelesuserbus = async (req, res) => {
  const { ubi } = req.params;
  console.log("console.log de Controlador",ubi)
  const hotel = await modelo().listhotelesuserbus(ubi);
  res.json({ hotel });
};

exports.listarhotel = async (req, res) => {
  const { id } = req.params;
  const hotel = await modelo().listhotel([id]);
  res.json({ hotel });
};
exports.agregarhotel = async (req, res) => {
  const { nombre,ubicacion,direccion,estrellas,servicios } = req.body;
  const datos = [nombre,ubicacion,direccion,estrellas,servicios];
  await modelo().agregarhotel(datos);
  res.json({ msg: "hotel agregado" });
};

exports.estadohotel = async (req, res) => {
  const { id } = req.params;
  await modelo().estadohotel([id]);
  res.json({ msg: "estado de hotel cambiado" });
};

exports.anadirhab = async (req, res) => {
  const { id } = req.params;
  await modelo().anadirhab([id]);
  res.json({ msg: "Habitacion anadida al hotel" });
};

exports.editarhotel = async (req, res) => {
  const { id } = req.params;
  const { nombre,ubicacion,direccion,estrellas,servicios } = req.body;
  const datos = [nombre,ubicacion,direccion,estrellas,servicios, id];
  await modelo().editarhotel(datos);
  res.json({ msg: "hotel modificado" });
};
