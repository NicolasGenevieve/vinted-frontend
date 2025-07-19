import "./Hero.css";
import hero from "../../../assets/hero.jpg";
import { useNavigate } from "react-router-dom";
import ButtonGreen from "../../Tools/Buttons/ButtonGreen.jsx";

const Hero = ({ token, setVisible, setModalType, setRedirectPath }) => {
  const navigate = useNavigate();

  return (
    <section className="heroImg">
      <img src={hero} />
      <div className="heroAbsolute">
        <div className="heroWrap">
          <div className="container">
            <div className="hero">
              <h1>Prêt à faire du tri dans tes placards ?</h1>
              <ButtonGreen
                title="Commencer à vendre"
                size="medium"
                onClick={() => {
                  if (token) {
                    navigate("/publish");
                  } else {
                    setModalType("login");
                    setVisible(true);
                    setRedirectPath("/publish");
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
