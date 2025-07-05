import "./Header.css";
import Brand from "./Brand.jsx";
import { IoSearch } from "react-icons/io5";
import ButtonGreen from "../Buttons/ButtonGreen.jsx";
import ButtonLight from "../Buttons/ButtonLight.jsx";

const Header = () => {
  return (
    <>
      <header>
        <div className="headerWrap">
          <section className="container">
            <Brand />
            <div className="search">
              <div className="glass">
                <IoSearch />
              </div>
              <input placeholder="Rechercher des articles..."></input>
            </div>
            <div className="action">
              <div className="buttonLightWrap">
                <ButtonLight title="S'inscrire" />
                <ButtonLight title="Se connecter" />
              </div>
              <ButtonGreen title="Vends tes articles" size="small" />
            </div>
          </section>
        </div>
      </header>
    </>
  );
};

export default Header;
