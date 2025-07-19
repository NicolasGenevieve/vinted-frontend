import "./ButtonGreen.css";

const ButtonGreen = ({ type, title, size, onClick, disabled }) => {
  return (
    <button type={type} className={size} onClick={onClick} disabled={disabled}>
      {title}
    </button>
  );
};

export default ButtonGreen;
