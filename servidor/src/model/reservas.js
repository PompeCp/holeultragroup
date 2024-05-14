const database = require("../database");

module.exports = function () {
  async function listreservas() {
    const query = await database.query(
      "SELECT  re.id_reserva, ho.nombre, re.id_habitacion,re.cliente,re.apellido,re.fecha_nacimiento,tc.nombre as nombre_doc,re.num_doc,re.email,re.telefono,re.nombre_emer,re.telefono_emer,re.fecha_inicio,re.fecha_fin,re.fecha_creacion,re.estado FROM hotel ho,habitaciones ha, reservas re, tipo_doc tc WHERE re.id_hotel = ho.id_hotel AND re.id_habitacion = ha.id_habitaciones AND re.tipo_doc = tc.id_tipodoc  "
    );
    return query;
  }
  async function listreserva(id) {
    const query = await database.query(
      "SELECT  re.id_reserva, ho.nombre, re.id_habitacion,re.cliente,re.apellido,re.fecha_nacimiento,tc.nombre,re.num_doc,re.email,re.telefono,re.nombre_emer,re.telefono_emer,re.fecha_inicio,re.fecha_fin,re.fecha_creacion,re.estado FROM hotel ho,habitaciones ha, reservas re, tipo_doc tc WHERE re.id_hotel = ho.id_hotel AND re.id_habitacion = ha.id_habitaciones AND re.tipo_doc = tc.id_tipodoc and id_reserva= ?  ",
      id
    );
    return query;
  }

  async function agregarreservas(datos) {
    const query = await database.query(
      "INSERT INTO reservas (id_hotel, id_habitacion, cliente, apellido, fecha_nacimiento, tipo_doc, num_doc, email, telefono, nombre_emer, telefono_emer, fecha_inicio, fecha_fin, estado, fecha_creacion) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, TRUE, NOW())",
      datos
    );
    return query;
  }

  async function estadoreservas(id) {
    const resultados = await database.query(
      "SELECT estado FROM reservas WHERE id_reserva = ?",
      [id]
    );
    if (resultados && [resultados].length > 0) {
      const estadoActual = resultados[0].estado;
      const nuevoEstado = !estadoActual;
      const resultadoUpdate = await database.query(
        "UPDATE reservas SET estado = ?, fecha_update = NOW() WHERE id_reserva = ?",
        [nuevoEstado, id]
      );
      // const habitacion = await database.query("UPDATE habitacion SET estado = false,fecha_update = NOW() WHERE id_habitacion = ?",id);
      return resultadoUpdate;
    } else {
      throw new Error(`No se encontró un habitacion con id ${id}`);
    }
  }

  async function editarreservas(datos) {
    const query = await database.query(
      "UPDATE reservas SET id_hotel = ?, id_habitacion = ?,  cliente = ?,fecha_inicio  = ?,fecha_fin = ?,estado_reser = ?, fecha_update = NOW()  WHERE id_reserva = ?",
      datos
    );
    return query;
  }

  return {
    listreservas,
    listreserva,
    agregarreservas,
    estadoreservas,
    editarreservas,
  };
};
