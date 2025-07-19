import "./ButtonGreen.css";

const ButtonGreen = ({ title, size, onClick, disabled }) => {
  return (
    <button className={size} onClick={onClick} disabled={disabled}>
      {title}
    </button>
  );
};

export default ButtonGreen;
