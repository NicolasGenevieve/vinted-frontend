import "./Offers.css";
import Offer from "./Offer";

const Offers = ({ product }) => {
  return (
    <section className="offersWrap">
      <div className="container">
        <div className="offersWrap2">
          <Offer product={product} />
        </div>
      </div>
    </section>
  );
};

export default Offers;
