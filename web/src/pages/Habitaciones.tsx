import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Navbar, Footer, Modal } from "../shared";
import {
  getHabitacion,
  addHabitacion,
  editHabitacion,
  deleteHabitacion,
  anadirhab,
  api,
} from "../servicios";

const Habitaciones = () => {
  const { id } = useParams();
  const [Habitacion, setHabitacion] = useState([]);

  const fetchHabitaciones = async (id: any) => {
    const datos = await getHabitacion(id);
    console.log(datos);
    if (datos?.status === 200) {
      setHabitacion(datos.data.habitacion);
      console.log(datos.data.habitacion);
    }
  };
  useEffect(() => {
    fetchHabitaciones(id);
  }, []);
  const formde = {
    id_hotel: { id }.id,
    precio: "",
    impuesto: "",
    id_tipohab: "1",
    tipoModal: "",
    idhab: "",
  };
  const [modal1, setModal1] = useState(false);
  const openModal = async () => {
    setModal1(!modal1);
    setForm(formde);
  };
  const [form, setForm] = useState({
    id_hotel: { id }.id,
    precio: "",
    impuesto: "",
    id_tipohab: "1",
    tipoModal: "",
    idhab: "",
  });
  const changeForm = (field: any, value: any) => {
    setForm({ ...form, [field]: value });
    console.log(form);
  };
  const addForm = async (event: any) => {
    event.preventDefault();
    await addHabitacion(form);
    await anadirhab(id);
    setModal1(!modal1);
    await fetchHabitaciones(id);
  };
  const selecHabitacion = (HabitacionSeleccionada: any) => {
    const { precio,impuesto, id_habitaciones, id_tipohab } = HabitacionSeleccionada;
    setForm({
      id_hotel: { id }.id,
      precio,
      impuesto,
      tipoModal: "editar",
      id_tipohab,
      idhab: id_habitaciones,
    });
    setModal1(true);
  };

  const deshabilitarstate = async (item: any) => {
    const opcion = window.confirm(
      `Estás Seguro que deseas Deshabilitar la habitacion ${item.id_habitaciones}`
    );
    if (opcion) {
      try {
        console.log(item.id_habitaciones);
        await deleteHabitacion(item.id_habitaciones);
        await fetchHabitaciones(id);
      } catch (error) {
        console.log("Error al deshabilitar el hotel:", error);
      }
    }
  };

  const editarHabitacion = async (event: any) => {
    event.preventDefault();
    await editHabitacion(form.idhab, form);
    console.log(form.idhab)
    setModal1(!modal1);
    await fetchHabitaciones(id);
  };

  if (Habitacion.length == 0) {
    <h1>no hay registros </h1>;
  }

  function sumtotal(a:any,b:any) {
    
    const num1 = parseFloat(a)
    const num2 = parseFloat(b)
    const total = (num1+num2)
    return `${total}`;
  }
  

  return (
    <>
      <Navbar />
      <div className="container__ContenedorBotones">
        <button
          className="container__ContenedorBotones__Botonmodal"
          onClick={() => openModal()}
        >
          crear Habitacion
        </button>
      </div>
      <Modal
        State={modal1}
        setModal1={setModal1}
        titulo={
          form.tipoModal === "editar" ? "Editar Habitacion" : "Crear Habitacion"
        }
        showHeader={true}
        showOverlay={true}
      >
        <div className="container__Contenidomodal">
          <form
            className="container__Contenidomodal__Formulariomodal"
            onSubmit={form.tipoModal === "editar" ? editarHabitacion : addForm}
          >
            <span>tipo habitacion</span>
            <select
              name="id_tipohab"
              id="id_tipohab"
              value={form.id_tipohab.toString()} // Asigna el valor seleccionado a la variable form.nombre
              onChange={(event) => {
                changeForm("id_tipohab", event.target.value); // Actualiza form.nombre cuando cambia la selección
              }}
            >
              <option value="1">sencilla</option>
              <option value="2">doble</option>
              <option value="3">suit</option>
            </select>

            <span>precio</span>
            <input
              className="input-n"
              type="number"
              value={form.precio}
              name="precio"
              onChange={(event) => {
                changeForm(
                  "precio",
                  event.target.value // le pasamos el valor
                );
              }}
              placeholder="precio"
              required
              autoComplete="off"
              min="0"
            />
            <span>impuesto</span>
            <input
              className="input-n"
              type="number"
              value={form.impuesto}
              name="impuesto"
              onChange={(event) => {
                changeForm(
                  "impuesto",
                  event.target.value // le pasamos el valor
                );
              }}
              placeholder="impuesto"
              required
              autoComplete="off"
              min="0"
            />
            <div>
              <button type="submit">
                {form.tipoModal === "editar" ? "Guardar cambios" : "Enviar"}
              </button>
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
                <p className="container__card-container2__card-divtitle">
                  Estado: {item.estado === 1 ? "🟢" : "🔴"}
                </p>
              </div>
              <div className="container__card-container2__card-content-varios">
                <p className="container__card-container2__card-info">
                  tipo de habitacion: {item.nombre}
                </p>
                <p className="container__card-container2__card-info">
                  precio : {sumtotal(item.precio,item.impuesto)}
                </p>
              </div>
              <div className="container__card-container2__card-contenedorfoot">
                <div className="container__card-container2__card-actions">
                  <button onClick={() => selecHabitacion(item)}>Editar</button>
                  <button onClick={() => deshabilitarstate(item)}>
                    estado
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

export default Habitaciones;
