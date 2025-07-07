import { Link } from "react-router-dom";
import "./Offer.css";
import User from "../User/User";

const Offer = ({ product }) => {
  return (
    <>
      {product.map((offer) => (
        <Link key={offer._id} to={`/offer/${offer._id}`} className="linkOffer">
          <div className="offerWrap">
            <User user={offer.owner} />
            <div className="offerPicture">
              <img src={offer.product_image.secure_url} />
            </div>
            <div className="offerPrice">{offer.product_price.toFixed(2)} €</div>

            <div className="offerDesc">
              {offer.product_details.map((item, index) => {
                if (item.TAILLE || item.MARQUE) {
                  return (
                    <div key={index}>
                      {item.TAILLE && <span>{item.TAILLE}</span>}
                      {item.MARQUE && <span>{item.MARQUE}</span>}
                    </div>
                  );
                } else {
                  return null;
                }
              })}
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default Offer;
