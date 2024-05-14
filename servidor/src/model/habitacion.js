const database = require("../database");

module.exports = function () {
  async function listhabitaciones() {
    const query = await database.query(
      "SELECT ha.id_habitaciones, th.nombre, ha.precio,ha.impuesto, ha.estado FROM tipo_habitacion th,habitaciones ha ,hotel ho WHERE ho.id_hotel = ha.id_hotel AND ha.id_tipohab = th.id_tipohab   AND ho.estado = TRUE "
    );
    return query;
  }
  async function listhabitacion(id) {
    const query = await database.query(
      "SELECT ha.id_habitaciones,ha.id_tipohab, th.nombre, ha.precio,ha.impuesto, ha.estado FROM tipo_habitacion th,habitaciones ha ,hotel ho WHERE ho.id_hotel = ha.id_hotel AND ha.id_tipohab = th.id_tipohab AND ha.id_hotel = ? ",
      id
    );
    return query;
  }

  async function listhabitacionuser(id) {
    const query = await database.query(
      "SELECT ha.id_habitaciones,ha.id_tipohab, th.nombre, ha.precio,ha.impuesto, ha.estado FROM tipo_habitacion th,habitaciones ha ,hotel ho WHERE ho.id_hotel = ha.id_hotel AND ha.id_tipohab = th.id_tipohab AND ha.estado = TRUE AND ha.id_hotel = ? ",
      id
    );
    return query;
  }

  async function agregarhabitacion(datos) {
    const query = await database.query(
      "INSERT INTO habitaciones(id_hotel,id_tipohab,precio,impuesto,estado,fecha_creacion) VALUES (?,?,?,?,TRUE,NOW())",
      datos
    );
    return query;
  }

  async function estadohabitacion(id) {
    const resultados = await database.query(
      "SELECT estado FROM habitaciones WHERE id_habitaciones = ?",
      [id]
    );
    if (resultados && [resultados].length > 0) {
      const estadoActual = resultados[0].estado;
      const nuevoEstado = !estadoActual;
      const resultadoUpdate = await database.query(
        "UPDATE habitaciones SET estado = ?, fecha_update = NOW() WHERE id_habitaciones = ?",
        [nuevoEstado, id]
      );
      // const habitacion = await database.query("UPDATE habitacion SET estado = false,fecha_update = NOW() WHERE id_habitacion = ?",id);
      return resultadoUpdate;
    } else {
      throw new Error(`No se encontró un habitacion con id ${id}`);
    }
  }

  async function editarhabitacion(datos) {
    const query = await database.query(
      "UPDATE habitaciones SET id_hotel = ?, id_tipohab = ?,  precio = ?,impuesto = ?, fecha_update = NOW()  WHERE id_habitaciones = ?",
      datos
    );
    return query;
  }

  return {
    listhabitaciones,
    listhabitacion,
    listhabitacionuser,
    agregarhabitacion,
    estadohabitacion,
    editarhabitacion,
  };
};
