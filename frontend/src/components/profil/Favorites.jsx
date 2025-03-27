import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function Favorites({ ping, setping }) {
    const favoris = useSelector((state) => state.favoris.favorislist);
    const user = useSelector((state) => state.user.user);
    const dispatch = useDispatch();


    



    return (
        <>
        
        </>
    )
}

export default Favorites;
