import { useDispatch, useSelector } from "react-redux";
import { deleteanimal } from "../JS/userSlice/animalSlice";

function Cardanimal({ animal }) {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
    const handleDelete = (id) => {
      if (window.confirm("Voulez-vous vraiment supprimer cet utilisateur ?")) {
        dispatch(deleteanimal(id));
      }
    };

  return (
    <div>
      {user?.category === "admin" && (
        <button
          style={{
            border: "none",
            background: "#f5eeee",
            position: "relative",
            left: 246,
            top: 30,
            color: "red",
            height:28
          }}
          onClick={() => handleDelete(animal._id)}
        >
         <h5>X</h5> 
        </button>
      )}
      <div className="animal-card">
        <img style={{ width: 250 }} src={animal?.img} alt={animal?.titel} />
        <div className="animal-sec">
          <h4 className="animal-title" style={{ textAlign: "center" }}>
            {animal?.titel}
          </h4>
          <p className="animal-desc">
            <h1 className="h1name">description:&nbsp;</h1>
            {animal?.description}
          </p>
          <p className="animal-desc">
            <h1 className="h1name">name:&nbsp;</h1>
            {animal?.name}
          </p>
          <p className="animal-desc">
            <h1 className="h1name">race:&nbsp;</h1>
            {animal?.race}
          </p>
          <p className="animal-desc">
            <h1 className="h1name">gender:&nbsp;</h1>
            {animal?.gender}
          </p>
          <p className="animal-desc">
            <h1 className="h1name">location:&nbsp;</h1>
            {animal?.location}
          </p>
        </div>
      </div>
    </div>
  );
}
export default Cardanimal;
