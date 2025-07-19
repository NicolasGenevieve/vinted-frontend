import "../components/Connexion/Connexion.css";
import Input from "../components/Connexion/Input";
import "../components/Connexion/Input.css";
import ButtonGreen from "../components/Tools/Buttons/ButtonGreen";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Signup = ({ connexionStatus, setVisible, setModalType }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);

  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setError(null);
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        {
          email: email,
          username: username,
          password: password,
          newsletter: newsletter,
        }
      );
      console.log("réponse du serveur", response.data);

      const token = response.data.token;
      if (token) {
        connexionStatus(token);
        if (setVisible) {
          setVisible(false);
        } else {
          navigate("/");
        }
      }
    } catch (error) {
      console.log(error);
      if (error.response.data.message === "Missing parameters") {
        setError("Veuillez remplir tous les champs");
      } else if (
        error.response.data.message === "This email already has an account"
      ) {
        setError("Cet email est déjà utilisé");
      } else {
        setError("Une erreur est survenue, veuillez réessayer");
      }
    }
  };

  return (
    <div className="connectWrap">
      <form className="formConnexion" onSubmit={handleSubmit}>
        <p className="title">S'inscrire</p>
        <Input
          className="inputConnect"
          id="username"
          type="text"
          placeholder="Nom d'utilisateur"
          name="username"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />

        <Input
          className="inputConnect"
          id="email"
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <Input
          className="inputConnect"
          id="password"
          type="password"
          placeholder="Mot de passe"
          name="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        {error ? <p className="error">{error}</p> : <></>}
        <div className="checkTitle">
          <Input
            className="checkbox"
            id="newsletter"
            type="checkbox"
            name="newsletter"
            checked={newsletter}
            onChange={(event) => {
              setNewsletter(event.target.checked);
            }}
          />
          <p>S'inscrire à notre newsletter</p>
        </div>
        <p className="news">
          En m'inscrivant je confirme avoir lu et accepté les Termes &
          Conditions et Politique de Confidentialité de Vinted. Je confirme
          avoir au moins 18 ans.
        </p>
        <div className="buttonWrap">
          <ButtonGreen title="S'inscrire" size="medium" />
        </div>
        <p
          className="account"
          onClick={() => {
            setModalType("login");
            setVisible(true);
          }}
        >
          Tu as déjà un compte ? Connecte-toi !
        </p>
      </form>
    </div>
  );
};

export default Signup;
