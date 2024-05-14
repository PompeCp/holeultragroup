import { Link } from "react-router-dom";
import { Navbar, Footer, Modal, Ciudades } from "../shared";
import {
  getHoteles,
  addHotel,
  editHotel,
  deleteHotel,
  api,
} from "../servicios/index";
import { useState, useEffect } from "react";

const HomePage = () => {
  const [Hotel, setHotel] = useState([]);

  const fetchHoteles = async () => {
    const datos = await getHoteles();
    console.log(datos);
    if (datos?.status === 200) {
      setHotel(datos.data.hotel);
    }
  };
  useEffect(() => {
    fetchHoteles();
  }, []);

  const formde = {
    nombre: "",
    direccion: "",
    estrellas: "",
    ubicacion: "",
    servicios: "",
    tipoModal: "",
    id: "",
  };

  const [modal1, setModal1] = useState(false);
  const openModal = async () => {
    setModal1(!modal1);
    setForm(formde);
  };
  const [form, setForm] = useState({
    nombre: "",
    direccion: "",
    estrellas: "",
    ubicacion: "",
    servicios: "",
    tipoModal: "",
    id: "",
  });
  const changeForm = (field: any, value: any) => {
    setForm({ ...form, [field]: value });
  };
  const addForm = async (event: any) => {
    event.preventDefault();
    await addHotel(form);
    setModal1(!modal1);
    await fetchHoteles();
  };

  const selecHotel = (hotelSeleccionado: any) => {
    const { nombre, direccion, estrellas, ubicacion, servicios, id_hotel } =
      hotelSeleccionado;
    setForm({
      nombre,
      direccion,
      estrellas,
      ubicacion,
      servicios,
      tipoModal: "editar",
      id: id_hotel,
    });
    setModal1(true);
  };

  const editarHotel = async (event: any) => {
    event.preventDefault();
    await editHotel(form.id, form);
    setModal1(!modal1);
    await fetchHoteles();
  };

  const deshabilitarstate = async (item: any) => {
    const opcion = window.confirm(
      `Estás Seguro que deseas cambiar el estado del hotel ${item.id_hotel}`
    );
    if (opcion) {
      try {
        console.log(item.id_hotel);
        await deleteHotel(item.id_hotel);
        await fetchHoteles();
      } catch (error) {
        console.log("Error al deshabilitar el hotel:", error);
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="container__ContenedorBotones">
        <button
          className="container__ContenedorBotones__Botonmodal"
          onClick={() => openModal()}
        >
          crear Hotel
        </button>
        <Link to={`/reservaradmin`} className="container__ContenedorBotones__Botonmodal">
          ver reservas
        </Link>
      </div>
      <Modal
        State={modal1}
        setModal1={setModal1}
        titulo={form.tipoModal === "editar" ? "Editar Hotel" : "Crear Hotel"}
        showHeader={true}
        showOverlay={true}
      >
        <div className="container__Contenidomodal">
          <form
            className="container__Contenidomodal__Formulariomodal"
            onSubmit={form.tipoModal === "editar" ? editarHotel : addForm}
          >
            <span>Nombre</span>
            <input
              className="input-n"
              type="text"
              placeholder="Nombre"
              value={form.nombre}
              name="nombre"
              onChange={(event) => {
                changeForm(
                  "nombre",
                  event.target.value // le pasamos el valor
                );
              }}
              required
              autoComplete="off"
            />
            <span>ubicacion</span>

            <select
            className="inputsel2"
              name="ubicacion"
              id="ubicacion"
              value={form.ubicacion.toString()} // Asigna el valor seleccionado a la variable form.nombre
              onChange={(event) => {
                changeForm("ubicacion", event.target.value); // Actualiza form.nombre cuando cambia la selección
              }}
            >
              <Ciudades />
            </select>
            <span>direccion</span>
            <input
              className="input-n"
              type="text"
              value={form.direccion}
              name="direccion"
              id="direccion"
              onChange={(event) => {
                changeForm(
                  "direccion",
                  event.target.value // le pasamos el valor
                );
              }}
              placeholder="direccion"
              required
              autoComplete="off"
            />
            <span>estrellas</span>
            <input
              className="input-n"
              type="number"
              value={form.estrellas}
              name="estrellas"
              id="estrellas"
              min="1"
              max="5"
              onChange={(event) => {
                changeForm(
                  "estrellas",
                  event.target.value // le pasamos el valor
                );
              }}
              placeholder="estrellas"
              required
              autoComplete="off"
            />
            <span>servicios</span>
            <textarea
              className="input-desc"
              value={form.servicios}
              name="servicios"
              id="fileinput"
              onChange={(event) => {
                changeForm(
                  "servicios",
                  event.target.value // le pasamos el valor
                );
              }}
              placeholder="servicios"
              required
              autoComplete="off"
            />
            <div>
              <button type="submit">
                {form.tipoModal === "editar" ? "Guardar cambios" : "Enviar"}
              </button>
            </div>
          </form>
        </div>
      </Modal>

      <div className="container__card-container">
        {Hotel.map((item: any) => (
          <div key={item.id_hotel} className="container__card-container__card">
            <div>
              <img
                src={api + "upload/" + "R.jpg"}
                alt="hotel"
                className="container__card-container__card-img"
              />
            </div>
              <div className="container__card-container__card-content">
                <div className="container__card-container__card-divtitle">
                <h3 className="container__card-container__card-divtitle-title">
                {item.nombre}
                </h3>
                <p className="container__card-container__card-divtitle">
                  Estado: {item.estado === 1 ? "🟢" : "🔴"}
                </p>
              </div>
                <div className="container__card-container__card-content-varios">
                <p className="container__card-container__card-info">
                  Habitaciones: {item.numhabitaciones}
                </p>
                <p className="container__card-container__card-info">
                  Ubicación: {item.ubicacion}
                </p>
                <p className="container__card-container-card-info">
                  Dirección: {item.direccion}
                </p>
                </div>
                <p className="container__card-container__card-desc">
                  {item.servicios}
                </p>
                <div className="container__card-container__card-contenedorfoot">
      
                <p className="container__card-container__card-infofoot">
                  Estrellas: {item.estrellas}
                </p>
               
                <div className="container__card-container__card-actions">
                
                  <button onClick={() => selecHotel(item)}>Editar</button>
                  <button onClick={() => deshabilitarstate(item)}>
                    Estado
                  </button>
                  <Link
                    to={`/habitaciones/${item.id_hotel}`}
                    className="container__card-container__card-actions-link"
                  >
                    Gestionar habitaciones
                  </Link>
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

export default HomePage;
