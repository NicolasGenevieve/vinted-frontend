import { useEffect, useState } from "react";
import axios from "axios";
import "../components/Product/Product.css";
import User from "../components/Tools/User/User";
import ButtonGreen from "../components/Tools/Buttons/ButtonGreen";
import { useParams } from "react-router-dom";
import Loader from "../components/Tools/Loader/Loader";
import displayPrice from "../utils/displayPrice";
import { useNavigate } from "react-router-dom";

const Product = ({ token, setModalType, setVisible, setRedirectPath }) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
        );
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="productWrap">
      <div className="productWrap2">
        <div className="container">
          <div className="product">
            <div className="productPicture">
              <img
                src={data.product_image.secure_url}
                alt={data.product_name}
              />
            </div>

            <div className="productDescription">
              <span className="price">{displayPrice(data.product_price)}</span>
              <div className="productDetailWrap">
                <div className="productDetailCriteria">
                  {data.product_details.map((detail, index) => {
                    const keyName = Object.keys(detail)[0];
                    return (
                      <div key={index}>
                        <span>
                          {keyName} : {detail[keyName]}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <h1>{data.product_name}</h1>
              <p className="description">{data.product_description}</p>
              <User user={data.owner} />
              <ButtonGreen
                title="Acheter"
                size="medium"
                onClick={() => {
                  if (token) {
                    navigate("/payment", {
                      state: {
                        title: data.product_name,
                        price: data.product_price,
                      },
                    });
                  } else {
                    setModalType("login");
                    setVisible(true);
                    setRedirectPath("/payment");
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
