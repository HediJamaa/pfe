import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addanimal } from "../JS/userSlice/animalSlice";
import Swal from "sweetalert2";
import { Calendar } from "primereact/calendar"; // نضيف هذا
import "./Ajouter.css";

function Ajouter() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user);

    const [newanimal, setnewanimal] = useState({
        name: "",
        img: "",
        description: "",
        race: "",
        age: null,
        gender: "",
        Activité: "",
        Couleur: "",
        location: "",
        remarque: "",
        idanimal: user?._id,
    });

    const isFormValid = () => {
        return (
            newanimal.img &&
            newanimal.name &&
            newanimal.description &&
            newanimal.race &&
            newanimal.age &&
            newanimal.gender &&
            newanimal.Activité &&
            newanimal.Couleur &&
            newanimal.location &&
            newanimal.remarque
        );
    };

    return (
        <div>
            <div style={{ display: "flex" }}>
                {/* IMAGE SECTION */}
                <div
                    style={{
                        backgroundImage: `url("https://www.la-spa.fr/app/app/uploads/2023/09/prendre-soin_mon-chien-saute-sur-les-gens.jpg")`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        width: "50%",
                        height: "126vh",
                    }}
                ></div>

                {/* FORM SECTION */}
                <div
                    style={{
                        backgroundColor: "#efeff1",
                        width: "50%",
                        height: "100vh",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        padding: 50,
                        marginTop:250
                    }}
                    className="inputt"
                >
                    <h1>Add your Animal</h1>

                    {/* name + image side by side */}
                    <div style={{ display: "flex", gap: "10px" }}>
                        <div style={{ flex: 1 }}>
                            <h5>
                                Add name<span style={{ color: "red" }}>*</span>
                            </h5>
                            <input
                                type="text"
                                onChange={(e) =>
                                    setnewanimal({ ...newanimal, name: e.target.value })
                                }
                            />
                        </div>

                        <div style={{ flex: 1 }}>
                            <h5>Add image<span style={{ color: "red" }}>*</span></h5>
                            <input
                                style={{padding:9}}
                                type="file"
                                accept="image/*"
                                onChange={(e) => setnewanimal({ ...newanimal, img: e.target.files[0] })}
                            />
                        </div>
                    </div>


                    {/* Other fields */}
                    <h5>
                        Add description<span style={{ color: "red" }}>*</span>
                    </h5>
                    <input
                        type="text"
                        onChange={(e) =>
                            setnewanimal({ ...newanimal, description: e.target.value })
                        }
                    />

                    <h5>
                        Add race<span style={{ color: "red" }}>*</span>
                    </h5>
                    <input
                        type="text"
                        onChange={(e) =>
                            setnewanimal({ ...newanimal, race: e.target.value })
                        }
                    />

                    <h5>
                        Add age<span style={{ color: "red" }}>*</span>
                    </h5>
                    {/* Calendar instead of text input */}
                    <Calendar
                    id="date"
                        value={newanimal.age}
                        onChange={(e) => setnewanimal({ ...newanimal, age: e.value })}
                        dateFormat="dd/mm/yy"
                        showIcon
                    />

                    <h5>
                        Add gender<span style={{ color: "red" }}>*</span>
                    </h5>
                    <input
                        type="text"
                        onChange={(e) =>
                            setnewanimal({ ...newanimal, gender: e.target.value })
                        }
                    />

                    <h5>
                        Add Activité<span style={{ color: "red" }}>*</span>
                    </h5>
                    <input
                        type="text"
                        onChange={(e) =>
                            setnewanimal({ ...newanimal, Activité: e.target.value })
                        }
                    />

                    <h5>
                        Add Couleur<span style={{ color: "red" }}>*</span>
                    </h5>
                    <input
                        type="text"
                        onChange={(e) =>
                            setnewanimal({ ...newanimal, Couleur: e.target.value })
                        }
                    />

                    <h5>
                        Add location<span style={{ color: "red" }}>*</span>
                    </h5>
                    <input
                        type="text"
                        onChange={(e) =>
                            setnewanimal({ ...newanimal, location: e.target.value })
                        }
                    />

                    <h5>
                        Add remarque<span style={{ color: "red" }}>*</span>
                    </h5>
                    <input
                        type="text"
                        onChange={(e) =>
                            setnewanimal({ ...newanimal, remarque: e.target.value })
                        }
                    />

                    {/* Submit Button */}
                    <div className="wrapper">
                        <a
                            onClick={() => {
                                if (isFormValid()) {
                                    const formData = new FormData();
                                    formData.append("name", newanimal.name);
                                    formData.append("img", newanimal.img);
                                    formData.append("description", newanimal.description);
                                    formData.append("race", newanimal.race);
                                    formData.append("age", newanimal.age);
                                    formData.append("gender", newanimal.gender);
                                    formData.append("location", newanimal.location);
                                    formData.append("remarque", newanimal.remarque);
                                    formData.append("Couleur", newanimal.Couleur);
                                    formData.append("Activité", newanimal.Activité);
                                    formData.append("idanimal", newanimal.idanimal);

                                    dispatch(addanimal(formData));

                                    Swal.fire({
                                        position: "center",
                                        icon: "success",
                                        title: "Has been saved",
                                        showConfirmButton: false,
                                        timer: 1500,
                                    });
                                } else {
                                    Swal.fire({
                                        position: "center",
                                        icon: "error",
                                        title: "Please fill all the fields",
                                        showConfirmButton: false,
                                        timer: 1500,
                                    });
                                }
                            }}
                        >
                            <span>Save Changes</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Ajouter;
