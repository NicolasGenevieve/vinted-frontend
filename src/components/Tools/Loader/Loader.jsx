import "./Loader.css";
import { BarLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="loadWrap">
      <BarLoader color="#007782" />
    </div>
  );
};

export default Loader;
