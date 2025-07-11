import "./Loader.css";
import { BarLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="loadWrap">
      <BarLoader />
    </div>
  );
};

export default Loader;
