import "./Header.css";
import Brand from "./Brand.jsx";
import { IoSearch } from "react-icons/io5";
import ButtonGreen from "../Tools/Buttons/ButtonGreen.jsx";
import ButtonLight from "../Tools/Buttons/ButtonLight.jsx";
import { Link } from "react-router-dom";

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
              <input
                className="inputSearch"
                placeholder="Rechercher des articles..."
              ></input>
            </div>
            <div className="action">
              <div className="buttonLightWrap">
                <Link to="/signup">
                  <ButtonLight title="S'inscrire" />
                </Link>
                <Link to="/login">
                  <ButtonLight title="Se connecter" />
                </Link>
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
