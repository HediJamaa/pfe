import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userRegister } from "../JS/userSlice/userSlice";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";

function Register() {
  const [register, setRegister] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    postalCode: "",
    location: "",
    phone: "",
  });

  const error = useSelector((state) => state.user.error);
  const [ping, setPing] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Vérifie que tous les champs sont remplis
    const tousChampsRemplis = Object.values(register).every(
      (val) => val.trim() !== ""
    );
    if (!tousChampsRemplis) {
      toast.error("Veuillez remplir tous les champs.");
      return;
    }

    // Vérifie que le numéro de téléphone contient exactement 8 chiffres
    if (!/^\d{8}$/.test(register.phone)) {
      toast.error("Le numéro de téléphone doit contenir exactement 8 chiffres.");
      return;
    }

    // Vérifie que le mot de passe a une longueur entre 6 et 20 caractères
    if (register.password.length < 6 || register.password.length > 20) {
      toast.error("Le mot de passe doit contenir entre 6 et 20 caractères.");
      return;
    }

    // Dispatch userRegister et gère le toast en cas d'erreur
    dispatch(userRegister(register))
      .unwrap()
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        if (error) {
          toast.error(error);
        }
      });

    setPing((prev) => !prev);
  };

  return (
    <div className="login-page">
      <div className="login-wrapper">
        <h2 className="login-title">Créer un compte</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="login-inputt"
            placeholder="Nom"
            required
            onChange={(e) =>
              setRegister({ ...register, name: e.target.value })
            }
          />
          <input
            type="text"
            className="login-inputt"
            placeholder="Prénom"
            required
            onChange={(e) =>
              setRegister({ ...register, lastname: e.target.value })
            }
          />
          <input
            type="tel"
            className="login-inputt"
            placeholder="Téléphone (8 chiffres)"
            required
            maxLength={8}
            value={register.phone}
            onChange={(e) => {
              const value = e.target.value;
              const chiffresSeulement = value.replace(/\D/g, "");
              setRegister({ ...register, phone: chiffresSeulement });
            }}
          />
          <input
            type="email"
            className="login-inputt"
            placeholder="Adresse e-mail"
            required
            onChange={(e) =>
              setRegister({ ...register, email: e.target.value })
            }
          />
          <input
            type="text"
            className="login-inputt"
            placeholder="Ville / Localité"
            required
            onChange={(e) =>
              setRegister({ ...register, location: e.target.value })
            }
          />
          <input
            type="text"
            className="login-inputt"
            placeholder="Code postal"
            required
            onChange={(e) =>
              setRegister({ ...register, postalCode: e.target.value })
            }
          />
          <input
            type="password"
            className="login-inputt"
            placeholder="Mot de passe"
            required
            onChange={(e) =>
              setRegister({ ...register, password: e.target.value })
            }
          />

          <button className="login-button" type="submit">
            S'inscrire
          </button>
        </form>

        <p className="login-register">
          Vous avez déjà un compte ? <Link to="/login">Se connecter</Link>
        </p>
      </div>

      {/* Le conteneur pour les notifications toast */}
      <ToastContainer />
    </div>
  );
}

export default Register;
