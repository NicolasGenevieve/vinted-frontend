import "./Brand.css";
import logo from "../../assets/logo.svg";

const Brand = () => {
  return (
    <div className="brand">
      <img
        src={logo}
        alt="calculatrice"
        onClick={() => {
          // méthode radicale : recharge la page
          window.location.href = "/";
        }}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default Brand;
