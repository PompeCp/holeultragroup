const database = require("../database");

module.exports = function () {
  async function listhoteles() {
    const hotel = await database.query(
      "SELECT * FROM hotel"
    );
    return hotel;
  }

  async function listhotelesuser() {
    const hotel = await database.query(
      "SELECT * FROM hotel where estado = true and numhabitaciones >= 1"
    );
    return hotel; 
  }
  async function listhotelesuserbus(ubi) {
    console.log("console.log de modelo",ubi)
    const hotel = await database.query(
      "SELECT * FROM hotel where estado = true and numhabitaciones >= 1 and ubicacion = ? ",
      ubi
    );
    return hotel; 
  }
  async function listhotel(id) {
    const hotel = await database.query(
      "SELECT * FROM hotel ho WHERE id_hotel = ? AND estado = true",
      id
    );
    return hotel;
  }

  async function agregarhotel(datos) {
    const hotel = await database.query(
      "INSERT INTO hotel(nombre,numhabitaciones,ubicacion,direccion,estrellas,servicios,estado,fecha_creacion) VALUES(?,0,?,?,?,?,TRUE,NOW())",
      datos
    );
    return hotel;
  }

  async function estadohotel(id) {
    const resultados = await database.query(
      "SELECT estado FROM hotel WHERE id_hotel = ?",
      [id]
    );
    if (resultados && [resultados].length > 0) {
      const estadoActual = resultados[0].estado;
      const nuevoEstado = !estadoActual;
      const resultadoUpdate = await database.query(
        "UPDATE hotel SET estado = ?, fecha_update = NOW() WHERE id_hotel = ?",
        [nuevoEstado, id]
      );
      // const hotel = await database.query("UPDATE hotel SET estado = false,fecha_update = NOW() WHERE id_hotel = ?",id);
      return resultadoUpdate;
    } else {
      throw new Error(`No se encontró un hotel con id ${id}`);
    }
  }

  async function anadirhab(id) {
    const resultados = await database.query(
      "SELECT COUNT(*) FROM habitaciones ha ,hotel ho WHERE ha.id_hotel=ho.id_hotel AND ha.id_hotel = ?",
      [id]
    );
    if (resultados && [resultados].length > 0) {
      const num = resultados[0]['COUNT(*)'];;
      console.log(num)
      const resultadoUpdate = await database.query(
        "UPDATE hotel SET numhabitaciones = ? WHERE id_hotel = ?",
        [num, id]
      );
      return resultadoUpdate;
    } else {
      throw new Error(`No se encontró un hotel con id ${id}`);
    }
  }

  async function editarhotel(datos) {
    const hotel = await database.query(
      "UPDATE hotel SET nombre = ?,ubicacion = ?,  direccion = ?, estrellas = ?,servicios  = ?, fecha_update = NOW()  WHERE id_hotel = ?",
      datos
    );
    return hotel;
  }

  return {
    listhoteles,
    listhotel,
    listhotelesuser,
    listhotelesuserbus,
    anadirhab,
    agregarhotel,
    estadohotel,
    editarhotel,
  };
};
