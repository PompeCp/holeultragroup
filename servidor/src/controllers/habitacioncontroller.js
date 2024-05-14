const modelo = require("../model/habitacion");

exports.listarhabitaciones = async (req, res) => {
  const habitacion = await modelo().listhabitaciones();
  res.json({ habitacion });
};

exports.listarhabitacion = async (req, res) => {
  const { id } = req.params;
  const habitacion = await modelo().listhabitacion([id]);
  res.json({ habitacion });
};

exports.listarhabitacionuser = async (req, res) => {
  const { id } = req.params;
  const habitacion = await modelo().listhabitacionuser([id]);
  res.json({ habitacion });
};

exports.agregarhabitacion = async (req, res) => {
  const { id_hotel,id_tipohab,precio,impuesto } = req.body;
  const datos = [id_hotel,id_tipohab,precio,impuesto ];
  await modelo().agregarhabitacion(datos);
  res.json({ msg: "habitacion agregado" });
};

exports.estadohabitacion = async (req, res) => {
  const { id } = req.params;
  await modelo().estadohabitacion([id]);
  res.json({ msg: "estado de habitacion cambiado" });
};


exports.editarhabitacion = async (req, res) => {
  const { id } = req.params;
  const { id_hotel,id_tipohab,precio,impuesto  } = req.body;
  const datos = [id_hotel,id_tipohab,precio,impuesto , id];
  await modelo().editarhabitacion(datos);
  res.json({ msg: "habitacion modificado" });
};
