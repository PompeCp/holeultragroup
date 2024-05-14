import { Link , useLocation} from "react-router-dom";
import { Navbar, Footer, Ciudades } from "../shared";
import { getHoteluserubi, api } from "../servicios/index";
import { useState, useEffect } from "react";

const Reservarubi = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const param1 = JSON.parse(decodeURIComponent(queryParams.get("param1")));
  console.log({ param1 });
  const hoy = new Date().toISOString().slice(0, 10);
  const fechaActual = new Date(hoy);
   // Crear un objeto Date a partir de la cadena de fecha
  fechaActual.setDate(fechaActual.getDate() + 1); // Sumar 1 día
  const hoyMasUnDia = fechaActual.toISOString().slice(0, 10); // Convertir a cadena en formato YYYY-MM-DD
  let [selectedDate, setSelectedDate] = useState(hoy);
  let [selectedDate2, setSelectedDate2] = useState(hoyMasUnDia);
  const [Hotel, setHotel] = useState([]);

  let [hot, sethot] = useState("");
  const fetchHoteles = async () => {
    const ubi=param1.ubicacion
    const datos = await getHoteluserubi(ubi);
    console.log(hot)
    console.log(param1.ubicacion)
    console.log(datos?.data.hotel[0]);
     hot =datos?.data.hotel[0]
     sethot(hot)
    if (datos?.status === 200) {
      setHotel(datos.data.hotel);
    }
  };
  useEffect(() => {
    fetchHoteles().then;
  }, []);

  const [form, setForm] = useState({
    ubicacion: "",
    fechain: hoy,
    fechaFin: hoyMasUnDia,
    huespedes: "",
  });

  const changeForm = (field: any, value: any) => {
    setForm({ ...form, [field]: value });
    console.log(form);
  };

  const handleFechaInicioChange = (event: any) => {
    selectedDate = event;
    console.log("este es el consolelog de hanrefechain", selectedDate);
    const fechaInicioObj = new Date(selectedDate);
    const fechaFinObj = new Date(selectedDate2);
    if (fechaFinObj <= fechaInicioObj) {
      alert("La fecha de inicio no puede ser mayor o igual a la fecha de fin.");
      setSelectedDate(hoy);
      setForm({ ...form, fechain: hoy });
    } else {
      setSelectedDate(selectedDate);
      console.log(selectedDate);
      setForm({ ...form, fechain: selectedDate });
    }
  };
  const handleFechaFinChange = (event: any) => {
    selectedDate2 = event;
    setSelectedDate2(selectedDate2);

    const fechaInicioObj = new Date(selectedDate);
    fechaInicioObj.setDate(fechaInicioObj.getDate() + 1);
    const fechamas1 = fechaInicioObj.toISOString().slice(0, 10);
    console.log(fechamas1);
    const fechaFinObj = new Date(selectedDate2);

    if (fechaInicioObj >= fechaFinObj) {
      alert("La fecha de fin no puede ser menor o igual a la fecha de inicio.");
      setSelectedDate2(fechamas1);
      setForm({ ...form, fechaFin: fechamas1 });
    } else {
      setForm({ ...form, fechaFin: selectedDate2 });
    }
  };
  return (
    <>
      <Navbar />
      <div className="container__conten">
        <h2>¿A dónde vas?</h2>
        <div className="container__conten__search-container">
          <div className="container__conten__search-container__input-field">
            <select
              name="ubicacion"
              id="ubicacion"
              placeholder={param1.ubicacion }
              onChange={(event) => {
                changeForm("ubicacion", event.target.value);
              }}
            >
              <Ciudades />
            </select>
          </div>
          <div className="container__conten__search-container__input-field">
            <input
              type="date"
              id="start"
              name="Checkout"
              value={selectedDate || ""}
              min={hoy}
              max=""
              onChange={(event) => {
                console.log(event.target.value);
                handleFechaInicioChange(event.target.value);
              }}
              readonly="true"
            />
            <input
              type="date"
              id="start"
              name="Checkout"
              value={selectedDate2 || ""}
              min={hoyMasUnDia}
              max=""
              onChange={(event) => {
                console.log(event.target.value);
                handleFechaFinChange(event.target.value);
              }}
              readonly="true"
            />
          </div>
          <div className="container__conten__search-container__input-field">
            <select
              name="huespedes"
              id="huespedes"
              value={param1.huespedes}
              onChange={(event) => {
                changeForm("huespedes", event.target.value);
              }}
            >
              <option value="" disabled selected>
                cantidad de huespedes
              </option>
              <option value="1">1 huésped</option>
              <option value="2">2 huéspedes</option>
              <option value="3">mas de 2</option>
            </select>
          </div>
          <Link
        className="container__card-container__card-actions-link"
        to={{
          pathname: '/reservarubi',
          search: `?param1=${encodeURIComponent(JSON.stringify(form))}`,
        }}
      >
        reservar una habitacion
      </Link>
        </div>
      </div>


      <div className="container__card-container">
  {hot === undefined ? (
    <p>No hay hoteles disponibles</p>
  ) : (
    Hotel.map((item: any) => (
      <div key={item.id_hotel} className="container__card-container__card">
        <div>
          <img src={api + "upload/" + "R.jpg"} alt="hotel" className="container__card-container__card-img" />
        </div>
        <div className="container__card-container__card-content">
          <div className="container__card-container__card-divtitle">
            <h3 className="container__card-container__card-divtitle-title">{item.nombre}</h3>
            </div>
          <div className="container__card-container__card-content-varios">
            <p className="container__card-container__card-info">Habitaciones: {item.numhabitaciones}</p>
            <p className="container__card-container__card-info">Ubicación: {item.ubicacion}</p>
            <p className="container__card-container-card-info">Dirección: {item.direccion}</p>
          </div>
          <p className="container__card-container__card-desc">{item.servicios}</p>
          <div className="container__card-container__card-contenedorfoot">
            <p className="container__card-container__card-infofoot">Estrellas: {item.estrellas}</p>
            <div className="container__card-container__card-actions">
                    <Link
                    className="container-info__impresoras__item__content__Link"
                    to={`/reservarHab/${item.id_hotel}?param2=${encodeURIComponent(
                        JSON.stringify(param1)
                      )}`}
                  >
                    reservar una habitacion
                  </Link>
            </div>
          </div>
        </div>
      </div>
    ))
  )}
</div>

        
      <Footer />
    </>
  );
};

export default Reservarubi;
