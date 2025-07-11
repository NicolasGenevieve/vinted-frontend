import "../components/Connexion/Connexion.css";
import Input from "../components/Connexion/Input";
import "../components/Connexion/Input.css";
import ButtonGreen from "../components/Tools/Buttons/ButtonGreen";

const Login = () => {
  return (
    <div className="connectWrap">
      <form>
        <p className="title">Se connecter</p>

        <Input id="email" type="email" placeholder="Email" name="email" />
        <Input
          id="password"
          type="paswword"
          placeholder="Mot de passe"
          name="password"
        />
        <ButtonGreen title="Se connecter" size="medium" />
      </form>
    </div>
  );
};

export default Login;
