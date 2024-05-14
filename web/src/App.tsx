import { BrowserRouter, Routes, Route } from "react-router-dom"

import { HomePage,Habitaciones, Reservar,ReservarHabiacion,Reservarubi,ReservarHuser,Reservasadmin} from "./pages"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/habitaciones/:id" element={<Habitaciones />}></Route>
        <Route path="/reservar/" element={<Reservar />}></Route>
        <Route path="/reservarubi" element={<Reservarubi />} />
        <Route path="/reservarHab/:id" element={<ReservarHabiacion />}></Route>
        <Route path="/reservarubi/:id" element={<ReservarHuser />} />
        <Route path="/reservaradmin" element={<Reservasadmin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
