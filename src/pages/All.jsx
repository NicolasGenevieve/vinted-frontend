import { CgEnter } from "react-icons/cg";
import { Link } from "react-router-dom";

const All = () => {
  return (
    <main>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "100px",
        }}
      >
        <Link to="/">Retour à l'accueil</Link>
      </div>
    </main>
  );
};

export default All;
