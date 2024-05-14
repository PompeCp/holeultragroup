import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Navbar, Footer, Modal } from "../shared";
import {
  getHabitacionuser,
  addReserva,
  deleteHabitacion,
  api,
} from "../servicios";

const Reservarhuser = () => {
  const hoy = new Date().toISOString().slice(0, 10);
  const fechaActual = new Date(hoy); // Crear un objeto Date a partir de la cadena de fecha
  fechaActual.setDate(fechaActual.getDate() + 1); // Sumar 1 día
  const hoyMasUnDia = fechaActual.toISOString().slice(0, 10); // Convertir a cadena en formato YYYY-MM-DD
  let [selectedDate, setSelectedDate] = useState(hoy);
  let [selectedDate2, setSelectedDate2] = useState(hoyMasUnDia);

  const { id } = useParams();
  const [Habitacion, setHabitacion] = useState([]);
  const [id_h, setId_h] = useState("");

  const fetchHabitaciones = async (id: any) => {
    const datos = await getHabitacionuser(id);
    console.log(datos);
    if (datos?.status === 200) {
      setHabitacion(datos.data.habitacion);
    }
  };
  useEffect(() => {
    fetchHabitaciones(id);
  }, []);

  const [modal1, setModal1] = useState(false);
  const [form, setForm] = useState({
    id_hotel: { id }.id,
    id_habitacion: "",
    cliente: "",
    apellido: "",
    fecha_nacimiento: "",
    tipo_doc: "",
    num_doc: "",
    email: "",
    telefono: "",
    nombre_emer: "",
    telefono_emer: "",
    fecha_inicio: "" /*param2.fechain*/,
    fecha_fin: "" /*param2.fechaFin*/,
  });
  const changeForm = (field: any, value: any) => {
    setForm({ ...form, [field]: value });
    console.log(form);
    setId_h(form.id_habitacion);
  };
  const selecHabitacion = (HabitacionSeleccionada: any) => {
    setModal1(!modal1);
    const {
      id_habitaciones,
      cliente,
      apellido,
      fecha_nacimiento,
      tipo_doc,
      num_doc,
      email,
      telefono,
      nombre_emer,
      telefono_emer,
      fecha_inicio,
      fecha_fin,
    } = HabitacionSeleccionada;
    setForm({
      id_hotel: { id }.id,
      id_habitacion: id_habitaciones.toString(),
      cliente,
      apellido,
      fecha_nacimiento,
      tipo_doc,
      num_doc,
      email,
      telefono,
      nombre_emer,
      telefono_emer,
      fecha_inicio, //: param2.fechain,
      fecha_fin, // : param2.fechaFin,
    });
    console.log(form.id_habitacion);
    console.log(form);
    setModal1(true);
  };

  const handleFechaInicioChange = (event: any) => {
    selectedDate = event;
    console.log("este es el consolelog de hanrefechain", selectedDate);
    const fechaInicioObj = new Date(selectedDate);
    const fechaFinObj = new Date(selectedDate2);
    if (fechaFinObj <= fechaInicioObj) {
      alert("La fecha de inicio no puede ser mayor o igual a la fecha de fin.");
      setSelectedDate(hoy);
      setForm({ ...form, fecha_inicio: hoy });
    } else {
      setSelectedDate(selectedDate);
      console.log(selectedDate);
      setForm({ ...form, fecha_inicio: selectedDate });
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
      setForm({ ...form, fecha_fin: fechamas1 });
    } else {
      setForm({ ...form, fecha_fin: selectedDate2 });
    }
  };

  const editarHabitacion = async (event: any) => {
    event.preventDefault();
    await addReserva(form);
    deleteHabitacion(id_h);
    setModal1(!modal1);
    await fetchHabitaciones(id);
  };

  if (Habitacion.length == 0) {
    <h1>no hay registros </h1>;
  }

  function sumtotal(a: any, b: any) {
    const num1 = parseFloat(a);
    const num2 = parseFloat(b);
    const total = num1 + num2;
    return `${total}`;
  }

  return (
    <>
      <Navbar />
      <Modal
        State={modal1}
        setModal1={setModal1}
        titulo="Reservar habitacion"
        showHeader={true}
        showOverlay={true}
      >
        <div className="container__Contenidomodal">
          <form
            className="container__Contenidomodal__Formulariomodal"
            onSubmit={editarHabitacion}
          >
            <div>
              <div className="container__Contenidomodal__Formulariomodal__contenedor-input">
                <div className="container__Contenidomodal__Formulariomodal__contenedor-input__inputleft">
                  <span>nombre</span>
                  <input
                    className="input-n"
                    type="text"
                    placeholder="nombre"
                    name="cliente"
                    onChange={(event) => {
                      changeForm(
                        "cliente",
                        event.target.value // le pasamos el valor
                      );
                    }}
                    required
                    autoComplete="off"
                  />
                </div>
                <div className="container__Contenidomodal__Formulariomodal__contenedor-input__inputright">
                  <span>apellido</span>
                  <input
                    className="input-n"
                    type="text"
                    placeholder="apellido"
                    name="apellido"
                    onChange={(event) => {
                      changeForm(
                        "apellido",
                        event.target.value // le pasamos el valor
                      );
                    }}
                    required
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className="container__Contenidomodal__Formulariomodal__contenedor-input">
                <div className="container__Contenidomodal__Formulariomodal__contenedor-input__inputleft">
                  <span>fecha de nacimiento</span>
                  <input
                    className="input-n"
                    type="date"
                    placeholder="fecha nacimiento"
                    name="fecha_nacimiento"
                    onChange={(event) => {
                      changeForm(
                        "fecha_nacimiento",
                        event.target.value // le pasamos el valor
                      );
                    }}
                    required
                    autoComplete="off"
                  />
                </div>
                <div className="container__Contenidomodal__Formulariomodal__contenedor-input__inputright">
                  <span>tipo de doc</span>
                  <select
                    name="tipo_doc"
                    id="tipo_doc"
                    className="inputsel"
                    onChange={(event) => {
                      changeForm("tipo_doc", event.target.value);
                    }}
                    required
                  >
                    <option value="" className="" disabled selected>
                      selecciona tu documento
                    </option>
                    <option value="1">T.I.</option>
                    <option value="2">C.C.</option>
                    <option value="3">C.E.</option>
                  </select>
                </div>

                <div className="container__Contenidomodal__Formulariomodal__contenedor-input__inputright">
                  <span>numero de documento</span>
                  <input
                    className="input-n"
                    type="text"
                    placeholder="num_doc"
                    name="num_doc"
                    onChange={(event) => {
                      changeForm(
                        "num_doc",
                        event.target.value // le pasamos el valor
                      );
                    }}
                    required
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className="container__conten"></div>
              <div className="container__Contenidomodal__Formulariomodal__contenedor-input">
                <div className="container__Contenidomodal__Formulariomodal__contenedor-input__inputleft">
                  <span>email</span>
                  <input
                    className="input-n"
                    type="text"
                    placeholder="email"
                    name="email"
                    onChange={(event) => {
                      changeForm(
                        "email",
                        event.target.value // le pasamos el valor
                      );
                    }}
                    required
                    autoComplete="off"
                  />
                </div>
                <div className="container__Contenidomodal__Formulariomodal__contenedor-input__inputright">
                  <span>telefono</span>
                  <input
                    className="input-n"
                    type="text"
                    placeholder="telefono"
                    name="telefono"
                    onChange={(event) => {
                      changeForm(
                        "telefono",
                        event.target.value // le pasamos el valor
                      );
                    }}
                    required
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className="container__Contenidomodal__Formulariomodal__contenedor-input">
                <div className="container__Contenidomodal__Formulariomodal__contenedor-input__inputleft">
                  <span>contacto de emergencia</span>
                  <input
                    className="input-n"
                    type="text"
                    placeholder="nombre_emer"
                    name="nombre_emer"
                    onChange={(event) => {
                      changeForm(
                        "nombre_emer",
                        event.target.value // le pasamos el valor
                      );
                    }}
                    required
                    autoComplete="off"
                  />
                </div>
                <div className="container__Contenidomodal__Formulariomodal__contenedor-input__inputright">
                  <span>telefono de contacto de emergencia</span>
                  <input
                    className="input-n"
                    type="text"
                    placeholder="telefono_emer"
                    name="telefono_emer"
                    onChange={(event) => {
                      changeForm(
                        "telefono_emer",
                        event.target.value // le pasamos el valor
                      );
                    }}
                    required
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className="container__Contenidomodal__Formulariomodal__contenedor-input">
                <div className="container__Contenidomodal__Formulariomodal__contenedor-input__inputleft">
                  <input
                    type="date"
                    id="start"
                    name="Checkout"
                    className="input-n"
                    value={selectedDate}
                    min={hoy}
                    max=""
                    onChange={(event) => {
                      console.log(event.target.value);
                      handleFechaInicioChange(event.target.value);
                    }}
                    required
                  />
                </div>
                <div className="container__Contenidomodal__Formulariomodal__contenedor-input">
                <div className="container__Contenidomodal__Formulariomodal__contenedor-input__inputleft">
                  <input
                    type="date"
                    id="start"
                    name="Checkout"
                    className="input-n"
                    value={selectedDate2}
                    min={hoyMasUnDia}
                    max=""
                    onChange={(event) => {
                      console.log(event.target.value);
                      handleFechaFinChange(event.target.value);
                    }}
                    required
                  />
                </div>
              </div>
              <div className="container__conten__search-container2__input-field-input__inputright">
                <select
                  name="huespedes"
                  id="huespedes"
                  className="inputsel"
                  onChange={(event) => {
                    changeForm("huespedes", event.target.value);
                  }}
                  required
                >
                  <option value="" disabled selected>
                    cantidad de huespedes
                  </option>
                  <option value="1">1 huésped</option>
                  <option value="2">2 huéspedes</option>
                  <option value="3">mas de 2</option>
                </select>
              </div>
              </div>
              <button type="submit">Reservar</button>
            </div>
          </form>
        </div>
      </Modal>
      <h1>habitaciones de hotel: {id}</h1>

      <div className="container__card-container2">
        {Habitacion.map((item: any, indice: any) => (
          <div
            className="container__card-container2__card"
            key={item.id_habitaciones}
          >
            <div>
              <img
                src={api + "upload/" + "habitacion.jpg"}
                alt="hotel"
                className="container__card-container2__card-img"
              />
            </div>

            <div className="container__card-container2__card-content">
              <div className="container__card-container2__card-divtitle">
                <h3 className="container__card-container2__card-divtitle-title">
                  habitacion No° {indice + 1}
                </h3>
              </div>
              <div className="container__card-container2__card-content-varios">
                <p className="container__card-container2__card-info">
                  tipo de habitacion: {item.nombre}
                </p>
                <p className="container__card-container2__card-info">
                  precio : {sumtotal(item.precio, item.impuesto)}
                </p>
              </div>
              <div className="container__card-container2__card-contenedorfoot">
                <div className="container__card-container2__card-actions">
                  <button onClick={() => selecHabitacion(item)}>
                    Reservar Habitacion
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default Reservarhuser;
