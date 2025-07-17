import "./Header.css";
import Brand from "./Brand.jsx";
import { IoSearch } from "react-icons/io5";
import ButtonGreen from "../Tools/Buttons/ButtonGreen.jsx";
import ButtonLight from "../Tools/Buttons/ButtonLight.jsx";
import { Link } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";

const Header = ({
  token,
  connexionStatus,
  search,
  setSearch,
  setVisible,
  setModalType,
}) => {
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
                type="text"
                className="inputSearch"
                placeholder="Rechercher des articles..."
                value={search}
                onChange={(event) => {
                  setSearch(event.target.value);
                }}
              ></input>
            </div>
            <div className="action">
              {token ? (
                <>
                  <button
                    className="buttonRed"
                    onClick={() => {
                      connexionStatus(null);
                    }}
                  >
                    <IoIosLogOut className="logOut" />
                    Se déconnecter
                  </button>
                </>
              ) : (
                <div className="buttonLightWrap">
                  <ButtonLight
                    title="S'inscrire"
                    onClick={() => {
                      setModalType("signup");
                      setVisible(true);
                    }}
                  />

                  <ButtonLight
                    title="Se connecter"
                    onClick={() => {
                      setModalType("login");
                      setVisible(true);
                    }}
                  />
                </div>
              )}

              <ButtonGreen title="Vends tes articles" size="small" />
            </div>
          </section>
        </div>
      </header>
    </>
  );
};

export default Header;
