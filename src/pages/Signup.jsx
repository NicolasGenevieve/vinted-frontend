import "../components/Connexion/Connexion.css";
import Input from "../components/Connexion/Input";
import "../components/Connexion/Input.css";
import ButtonGreen from "../components/Tools/Buttons/ButtonGreen";

const Signup = () => {
  return (
    <div className="connectWrap">
      <form>
        <p className="title">S'inscrire</p>
        <Input
          id="username"
          type="text"
          placeholder="Nom d'utilisateur"
          name="username"
        />

        <Input id="email" type="email" placeholder="Email" name="email" />
        <Input
          id="password"
          type="paswword"
          placeholder="Mot de passe"
          name="password"
        />
        <ButtonGreen title="S'inscrire" size="medium" />
      </form>
    </div>
  );
};

export default Signup;
