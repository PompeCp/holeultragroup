import { Navbar, Footer } from "../shared";
import { getReservas, api } from "../servicios";
import { useState, useEffect } from "react";
const Reservasadmin = () => {
  const [reserva, setReserva] = useState([]);

  const fetchHoteles = async () => {
    const datos = await getReservas();
    console.log(datos?.data.reservas);
    if (datos?.status === 200) {
      setReserva(datos.data.reservas);
    }
  };
  useEffect(() => {
    fetchHoteles();
  }, []);

  function formatDate(dateString: string) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  return (
    <>
      <Navbar />
      <div className="container__card-container">
        {reserva.map((item: any) => (
          <div
            key={item.id_reserva}
            className="container__card-container__card"
          >
            <img
              src={api + "upload/" + "R.jpg"}
              alt="hotel"
              className="container__card-container__card-img"
            />
            <div className="container__card-container__card-content">
              <div className="container__card-container2__card-divtitle">
                <h3 className="container__card-container2__card-divtitle-title">
                  {item.nombre}
                </h3>
                <p className="container__card-container__card-info">
                  NumHabitacion: {item.id_habitacion}
                </p>
              </div>
              <h3 className="container__card-container__card-title"></h3>
              <div className="container__card-container2__card-content-variosreser">
                <p className="container__card-container__card-info">
                  nombre cliente: {item.cliente}
                </p>
                <p className="container__card-container-card-info">
                  apellido cliente : {item.apellido}
                </p>
              </div>
              <div className="container__card-container2__card-content-variosreser">
                <p className="container__card-container__card-info">
                  fecha de nacimiento: {formatDate(item.fecha_nacimiento)}
                </p>
                <p className="container__card-container__card-info">
                  documento: {item.nombre_doc} {item.num_doc}
                </p>
              </div>
              <div className="container__card-container2__card-content-variosreser">
                <p className="container__card-container__card-info">
                  email: {item.email}
                </p>
                <p className="container__card-container__card-info">
                  telefono: {item.telefono}
                </p>
              </div>
              <div className="container__card-container2__card-content-variosreser">
                <p className="container__card-container__card-info">
                  contacto de emergencia {item.nombre_emer}
                </p>
                <p className="container__card-container__card-info">
                  telefono emergencia {item.telefono_emer}
                </p>
              </div>
              <div className="container__card-container2__card-content-variosreser">
                <p className="container__card-container__card-info">
                  Check in {formatDate(item.fecha_inicio)}
                </p>
                <p className="container__card-container__card-info">
                  Chek out {formatDate(item.fecha_fin)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Reservasadmin;
