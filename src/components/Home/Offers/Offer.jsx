import { useEffect, useState } from "react";
import axios from "axios";
import displayPrice from "../../../utils/displayPrice";
import { Link } from "react-router-dom";
import "./Offer.css";
import User from "../../Tools/User/User";
import Loader from "../../Tools/Loader/Loader";

const Offer = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        // console.log(response);
        // console.log(response.data.offers);
        setData(response.data.offers);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <section className="load">
      <Loader />
    </section>
  ) : (
    <>
      {data.map((offer) => (
        <Link key={offer._id} to={`/offer/${offer._id}`} className="linkOffer">
          <div className="offerWrap">
            <User user={offer.owner} />
            <div className="offerPicture">
              <img src={offer.product_image.secure_url} />
            </div>
            <div className="offerPrice">
              {displayPrice(offer.product_price)}
            </div>

            <div className="offerDesc">
              <span>{offer.product_details[1].TAILLE}</span>
              <span>{offer.product_details[0].MARQUE}</span>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default Offer;
