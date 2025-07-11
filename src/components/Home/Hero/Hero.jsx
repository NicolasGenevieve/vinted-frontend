import "./Hero.css";
import hero from "../../../assets/hero.jpg";
import ButtonGreen from "../../Tools/Buttons/ButtonGreen.jsx";

const Hero = () => {
  return (
    <section className="heroImg">
      <img src={hero} />
      <div className="heroAbsolute">
        <div className="heroWrap">
          <div className="container">
            <div className="hero">
              <h1>Prêt à faire du tri dans tes placards ?</h1>
              <ButtonGreen title="Commencer à vendre" size="medium" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
