import "./Brand.css";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

const Brand = () => {
  return (
    <Link to="/">
      <div className="brand">
        <img src={logo} alt="calculatrice" />
      </div>
    </Link>
  );
};

export default Brand;
