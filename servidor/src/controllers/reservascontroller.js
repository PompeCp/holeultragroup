const modelo = require("../model/reservas");

exports.listarreservas = async (req, res) => {
  const reservas = await modelo().listreservas();
  res.json({ reservas });
};

exports.listarreserva = async (req, res) => {
  const { id } = req.params;
  const reservas = await modelo().listreserva([id]);
  res.json({ reservas });
};

exports.agregarreservas = async (req, res) => {
  const { id_hotel, id_habitacion, cliente, apellido, fecha_nacimiento, tipo_doc, num_doc, email, telefono, nombre_emer, telefono_emer, fecha_inicio, fecha_fin, estado, fecha_creacion} = req.body;
  const datos = [id_hotel, id_habitacion, cliente, apellido, fecha_nacimiento, tipo_doc, num_doc, email, telefono, nombre_emer, telefono_emer, fecha_inicio, fecha_fin, estado, fecha_creacion];
  await modelo().agregarreservas(datos);
  res.json({ msg: "reservas agregado" });
};

exports.estadoreservas = async (req, res) => {
  const { id } = req.params;
  await modelo().estadoreservas([id]);
  res.json({ msg: "estado de reservas cambiado" });
};

exports.editarreservas = async (req, res) => {
  const { id } = req.params;
  const { id_hotel,id_habitacion,cliente,fecha_inicio,fecha_fin,estado_reser } = req.body;
  const datos = [id_hotel,id_habitacion,cliente,fecha_inicio,fecha_fin,estado_reser, id];
  await modelo().editarreservas(datos);
  res.json({ msg: "reservas modificado" });
};
