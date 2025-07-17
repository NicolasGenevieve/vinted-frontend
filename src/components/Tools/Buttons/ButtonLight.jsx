import "./ButtonLight.css";

const ButtonLight = ({ title, onClick }) => {
  return (
    <button className="buttonLight" onClick={onClick}>
      {title}
    </button>
  );
};

export default ButtonLight;
