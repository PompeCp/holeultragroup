import { useState, useEffect } from "react";
import { getHoteles,api} from "../servicios/index";

const ListHotel = () => {
    const [Hotel, setHotel] = useState([]);
    useEffect(() => {
        //loadTipoSolicitud es una función que se ejecuta cuando el componente se renderiza
        const loadHotel = async () => {
          const datos = await getHoteles();
          console.log(datos);
          if (datos?.status === 200) {
            setHotel(datos.data.hotel);
          }
        };
        loadHotel();
      }, []);
    return (
    <>
    {Hotel.map((item:any)=> (
                <div
                key={item.id_hotel}
                className="container-info__impresoras__item"
              >
                <div className="container-info__impresoras__item__content">
                  <p style={{ padding: "20px" }}>{item.nombre} </p>
                  <img alt="hotel" src={api+"upload/" +"R.jpg" } />
                  <p style={{ textAlign: "left", paddingTop: "20px" }}>
                    habitaciones: {item.numhabitaciones}
                  </p>
                  <p style={{ textAlign: "left", paddingTop: "20px" }}>
                    direccion: {item.direccion}
                  </p>
                  <p style={{ textAlign: "left", paddingTop: "20px" }}>
                    estrellas: {item.estrellas}
                  </p>
                  <p style={{  paddingTop: "20px" }}>
                    {item.servicios}
                  </p>
                  <button>gestionar habitaciones</button>
                </div>
              </div>
    
    ))}
    </>
  );
};

export default ListHotel