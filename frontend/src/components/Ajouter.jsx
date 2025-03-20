import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Form from 'react-bootstrap/Form';
import { addanimal } from '../JS/userSlice/animalSlice';
import Swal from 'sweetalert2';


function Ajouter() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user);
    const [newanimal, setnewanimal] = useState({
        titel: "",
        img: "",
        description: "",
        Ingredients: "",
        Directions: "",
        chef: user?.name + " " + user?.lastname,
        idchef: user?._id

    })
    return (
        <div>
            <div style={{ display: "flex", marginBottom: 290 }}>
                <div style={{
                    backgroundImage: `url("https://foodu-react.vercel.app/assets/img/banner/1.jpg")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "50%",
                    // height: "85.6vh" 
                    height: "1080px"

                }}>

                </div>
                <div style={{
                    backgroundColor: "white",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "50%",
                    height: ": 256.6vh",
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: 50

                }}
                    className='inputt' >
                    <div style={{ display: "flex", alignItems: "center", }}>
                        <h1 style={{ color: "#eb0029", margin: 0 }}>Recipe</h1>
                        <img className='mg' src='https://foodu-react.vercel.app/assets/img/shape/18.png' />
                    </div>
                    <h1>Add your recipe</h1>

                    <h5>Add title</h5>
                    <input type="text" onChange={(e) => setnewanimal({ ...newanimal, titel: e.target.value })} />

                    <h5>Add image</h5>
                    <input type="text" onChange={(e) => setnewanimal({ ...newanimal, img: e.target.value })} />

                    <h5>Add description</h5>
                    <input type="text" onChange={(e) => setnewanimal({ ...newanimal, description: e.target.value })} />

                    <h5>Ingredients <br /> separate each ingrediants by( ;)</h5>
                    <textarea cols={10} rows="10" onChange={(e) => setnewanimal({ ...newanimal, Ingredients: e.target.value })}></textarea>

                    <h5>Directions <br /> separate each Directions by (;)</h5>
                    <textarea cols={10} rows="10" onChange={(e) => setnewanimal({ ...newanimal, Directions: e.target.value })}></textarea>
                    <h5>Category</h5>


                    {/* tzid mostatil */}
                    {/* <input type='text' /> */}


                    <Form.Select className="mt-4" aria-label="Default select example" onChange={(e) => setnewanimal({ ...newanimal, category: e.target.value })}>
                        <option value="TUNISIAN">TUNISIAN</option>
                        <option value="INTERNATIONAL">INTERNATIONAL</option>
                        <option value="Breakfast">Breakfast </option>
                        <option value="Lunch">Lunch</option>
                        <option value="Dinner">Dinner</option>
                        <option value="Desserts">Desserts</option>
                    </Form.Select>
                    <button onClick={() => {
                        dispatch(addanimal(newanimal)); Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Has been saved",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }}>
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Ajouter