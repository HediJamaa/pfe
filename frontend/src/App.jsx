import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router";
import Home from "./components/Home";
import Conseil from "./components/Conseil";
import Login from "./components/Login";
import Profil from "./components/Profil";
import Register from "./components/Register";
import PrivateRoute from "./Routes/PrivateRouter";
import Pronous from "./components/Pronous";
import Adoption from "./components/Adoption";
import Ajouter from "./components/Ajouter";
import Histoires from "./components/Histoires";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Pricing" element={<Conseil />} />
        <Route exact path="/register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Nous" element={<Pronous />} />
        <Route path="/Conseil" element={<Conseil />} />
        <Route path="/Ajouter" element={<Ajouter />} />
        <Route path="/histoire" element={<Histoires />} />        
        <Route path="/Adoption" element={<Adoption />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profil" element={<Profil />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
