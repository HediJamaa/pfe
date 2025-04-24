import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletepost } from "../JS/userSlice/postSlice";
import "./Cardpost.css";


function Cardpost({ product }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const handleDelete = (id) => {
    if (window.confirm("Voulez-vous vraiment supprimer cet utilisateur ?")) {
      dispatch(deletepost(id));
    }
  };
  return (
    <>
      <div className="nakcha">
nnn
      </div>
    </>


  );
}

export default Cardpost;
