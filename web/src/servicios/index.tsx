import axios from "axios";
export const api = `http://localhost:4000/`;

//Hotel---------------------------------
//GET-----------------------------------
export async function getHoteles() {
  try {
    const response = await axios({
      url: api + `hotel`,
      method: "GET",
    });

    return response;
  } catch (e) {
    console.log(e);
  }
}

//GEThotelde user-----------------------------------
export async function getHotelesuser() {
  try {
    const response = await axios({
      url: api + `hotel/user`,
      method: "GET",
    });

    return response;
  } catch (e) {
    console.log(e);
  }
}
// GetHotelubicacion
export async function getHoteluserubi(ubi: any) {
  try {
    const response = await axios({
      url: api + `hotel/ubicacion/${ubi}`,
      method: "GET",
      
    });
    console.log(ubi)

    return response;
  } catch (e) {
    console.log(e);
  }
}
//GETonce-------------------------------
export async function getHotel(id:any,) {
  try {
    const response = await axios({
      url: api + `hotel/${id}`,
      method: "GET",
    });

    return response;
  } catch (e) {
    console.log(e);
  }
}
//POST--------------------------
export async function addHotel(form: any) {
  try {
    const response = await axios({
      url: api + `hotel`,
      method: "POST",
      data: form,
    });

    return response;
  } catch (e) {
    console.log(e);
  }
}
//PUT--------------------------
export async function editHotel(id:any, form: any) {
  try {
    const response = await axios({
      url: api + `hotel/${id}`,
      method: "PUT",
      data: form,
    });

    return response;
  } catch (e) {
    console.log(e);
  }
}
//PUTstate--------------------------
export async function deleteHotel(id: any) {
  try {
    const response = await axios({
      url: api + `hotel/estado/${id}`,
      method: "PUT",
    });

    return response;
  } catch (e) {
    console.log(e);
  }
}

//PUThab--------------------------
export async function anadirhab(id: any) {
  try {
    const response = await axios({
      url: api + `hotel/hab/${id}`,
      method: "PUT",
    });

    return response;
  } catch (e) {
    console.log(e);
  }
}

//habitaciones--------------------------
//GET-----------------------------------
export async function getHabitaciones() {
  try {
    const response = await axios({
      url: api + `habitacion`,
      method: "GET",
    });

    return response;
  } catch (e) {
    console.log(e);
  }
}
//GETonce-------------------------------
export async function getHabitacion(id: any) {
  try {
    const response = await axios({
      url: api + `habitacion/${id}`,
      method: "GET",
    });

    return response;
  } catch (e) {
    console.log(e);
  }
}

//GETonceuser-------------------------------
export async function getHabitacionuser(id: any) {
  try {
    const response = await axios({
      url: api + `habitacion/user/${id}`,
      method: "GET",
    });

    return response;
  } catch (e) {
    console.log(e);
  }
}
//POST--------------------------
export async function addHabitacion(form: any) {
  try {
    const response = await axios({
      url: api + `habitacion`,
      method: "POST",
      data: form,
    });

    return response;
  } catch (e) {
    console.log(e);
  }
}
//PUT--------------------------
export async function editHabitacion(id:any, form: any) {
  try {
    const response = await axios({
      url: api + `habitacion/${id}`,
      method: "PUT",
      data: form,
    });

    return response;
  } catch (e) {
    console.log(e);
  }
}
//PUTstate--------------------------
export async function deleteHabitacion(id: any) {
  try {
    const response = await axios({
      url: api + `habitacion/estado/${id}`,
      method: "PUT",
    });

    return response;
  } catch (e) {
    console.log(e);
  }
}


//reservas------------------------------
//GET-----------------------------------
export async function getReservas() {
  try {
    const response = await axios({
      url: api + `reservas`,
      method: "GET",
    });

    return response;
  } catch (e) {
    console.log(e);
  }
}
//GETonce-------------------------------
export async function getReserva() {
  try {
    const response = await axios({
      url: api + `reservas/:id`,
      method: "GET",
    });

    return response;
  } catch (e) {
    console.log(e);
  }
}
//POST--------------------------
export async function addReserva(form: any) {
  try {
    const response = await axios({
      url: api + `reservas`,
      method: "POST",
      data: form,
    });

    return response;
  } catch (e) {
    console.log(e);
  }
}
//PUT--------------------------
export async function editReserva(id:any, form: any) {
  try {
    const response = await axios({
      url: api + `reservas/${id}`,
      method: "PUT",
      data: form,
    });

    return response;
  } catch (e) {
    console.log(e);
  }
}
//PUTstate--------------------------
export async function deleteReserva(form: any) {
  try {
    const response = await axios({
      url: api + `reservas/estado/:id`,
      method: "PUT",
      data: form,
    });

    return response;
  } catch (e) {
    console.log(e);
  }
}
