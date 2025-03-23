import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editanimal } from "../JS/userSlice/animalSlice";

function Example({animal,ping, setping }) {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [edited, setEdited] = useState({});

  useEffect(() => {
    if (animal) {
      setEdited({
        titel: animal.titel || "",
        img: animal.img || "",
        description: animal.description || "",
        Ingredients: animal.Ingredients || "",
        Directions: animal.Directions || "",
      });
    }
  }, [animal, show]);

  return (
    <>
      <button onClick={handleShow} style={styles.button}>
        Edit
      </button>

      {show && (
        <div className="modalinput" style={styles.modalOverlay}>
          <div style={styles.modal}>
            <h2>Edit animal</h2>
            <label>Title</label>
            <input
              type="text"
              value={edited.titel}
              onChange={(e) => setEdited({ ...edited, titel: e.target.value })}
              style={styles.input}
            />
            <label>Image URL</label>
            <input
              type="text"
              value={edited.img}
              onChange={(e) => setEdited({ ...edited, img: e.target.value })}
              style={styles.input}
            />
            <label>Description</label>
            <textarea
              value={edited.description}
              onChange={(e) =>
                setEdited({ ...edited, description: e.target.value })
              }
              style={styles.textarea}
            />
            <label>Ingredients</label>
            <textarea
              value={edited.Ingredients}
              onChange={(e) =>
                setEdited({ ...edited, Ingredients: e.target.value })
              }
              style={styles.textarea}
            />
            <label>Directions</label>
            <textarea
              value={edited.Directions}
              onChange={(e) =>
                setEdited({ ...edited, Directions: e.target.value })
              }
              style={styles.textarea}
            />
            <div style={styles.buttonGroup}>
              <button onClick={handleClose} style={styles.cancelButton}>
                Close
              </button>
              <button
                onClick={() => {
                  dispatch(editanimal({ id: animal._id, edited }));
                  setping(!ping);
                  handleClose();
                }}
                style={styles.saveButton}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// تعريف الأنماط CSS داخل كائن JavaScript
const styles = {
  button: {
    padding: "10px 15px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    margin: "5px",
  },
  modalOverlay : {
    position: "fixed",
    zIndex: 100000000000, // يجب استخدام "zIndex" بدلاً من "z-index"
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "10px",
    width: "400px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  input: {
    width: "100%",
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  textarea: {
    width: "100%",
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    height: "80px",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px",
  },
  cancelButton: {
    padding: "10px",
    backgroundColor: "#dc3545",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  saveButton: {
    padding: "10px",
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Example;
