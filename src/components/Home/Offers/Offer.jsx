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
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const limit = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offers?page=${page}&limit=${limit}`
        );
        // console.log(response);
        // console.log(response.data.offers);
        setData(response.data.offers);
        setTotalCount(response.data.count);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [page]);

  const totalPages = Math.ceil(totalCount / limit);

  return isLoading ? (
    <section className="load">
      <Loader />
    </section>
  ) : (
    <>
      <section className="offersWrap">
        <div className="container">
          <div className="offersWrap2">
            {data.map((offer) => (
              <Link
                key={offer._id}
                to={`/offer/${offer._id}`}
                className="linkOffer"
              >
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
          </div>
        </div>
      </section>
      <section className="container">
        <div className="pagination">
          <button
            className="small"
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
          >
            Précédent
          </button>
          <span>
            {page} / {totalPages}
          </span>
          <button
            className="small"
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
          >
            Suivant
          </button>
        </div>
      </section>
    </>
  );
};

export default Offer;
