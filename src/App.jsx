import { Route, Routes } from "react-router-dom";
import "./App.css";
import PokedexById from "./pages/PokedexById";
import Home from "./pages/Home";
import Pokedex from "./pages/Pokedex";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import Footer from "./components/home/shared/Footer";

function App() {
  return (
    <div className="App">
      <Routes>
       { 
       //*Ruta libre*//
        }
        <Route path="/" element={<Home />} />

        {
        //**Ruta protegida */
        }
        <Route element={<ProtectedRoutes />} />
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/pokedex/:id" element={<PokedexById />} />
      </Routes>
      <div>
        <Footer/>
    </div>
    </div>
  )
}

export default App;
