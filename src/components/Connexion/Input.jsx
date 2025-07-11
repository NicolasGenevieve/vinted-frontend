import "./Input.css";

const Input = ({ id, type, placeholder, name }) => {
  return (
    <input
      id={id}
      className="inputConnect"
      type={type}
      placeholder={placeholder}
      name={name}
    />
  );
};

export default Input;
