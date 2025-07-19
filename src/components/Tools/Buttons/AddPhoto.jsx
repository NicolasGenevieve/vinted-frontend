import "./AddPhoto.css";
import { FaRegPlusSquare } from "react-icons/fa";

const AddPhoto = ({ onChange }) => {
  return (
    <>
      <label className="labelPhoto" htmlFor="picture">
        <FaRegPlusSquare className="FaRegPlusSquare" /> Sélectionnez une photo
      </label>
      <input
        id="picture"
        style={{
          display: "none",
        }}
        type="file"
        onChange={onChange}
      />
    </>
  );
};

export default AddPhoto;
