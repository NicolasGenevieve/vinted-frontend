import "./Product.css";
import User from "../components/User/User";
import ButtonGreen from "../components/Buttons/ButtonGreen";
import { useParams } from "react-router-dom";

const Product = ({ product }) => {
  const { id } = useParams();
  console.log(id);

  const itemFound = product.find((offer) => id === offer._id);
  console.log({ Trouvé: itemFound });

  return (
    <div className="productWrap">
      <div className="productWrap2">
        <div className="container">
          {itemFound ? (
            <div className="product">
              <div className="productPicture">
                <img src={itemFound.product_image.secure_url} />
              </div>

              <div className="productDescription">
                <span className="price">
                  {itemFound.product_price.toFixed(2)} €
                </span>
                <div className="productDetailWrap">
                  <div className="productDetailCriteria">
                    {itemFound.product_details.map((item, index) => (
                      <div key={index}>
                        {item.MARQUE ? <span>MARQUE</span> : null}
                        {item.TAILLE ? <span>TAILLE</span> : null}
                        {item.ÉTAT ? <span>ÉTAT</span> : null}
                        {item.COULEUR ? <span>COULEUR</span> : null}
                        {item.EMPLACEMENT ? <span>EMPLACEMENT</span> : null}
                        {item["MODES DE PAIEMENT"] ? (
                          <span>MODES DE PAIEMENT</span>
                        ) : null}
                      </div>
                    ))}
                  </div>
                  <div className="productDetail">
                    {itemFound.product_details.map((item, index) => (
                      <div key={index}>
                        {item.MARQUE ? <span>{item.MARQUE}</span> : null}
                        {item.TAILLE ? <span>{item.TAILLE}</span> : null}
                        {item.ÉTAT ? <span>{item.ÉTAT}</span> : null}
                        {item.COULEUR ? <span>{item.COULEUR}</span> : null}
                        {item.EMPLACEMENT ? (
                          <span>{item.EMPLACEMENT}</span>
                        ) : null}
                        {item["MODES DE PAIEMENT"] ? (
                          <span>{item["MODES DE PAIEMENT"]}</span>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </div>
                <h1>{itemFound.product_name}</h1>
                <p className="description">{itemFound.product_description}</p>
                <User />
                <ButtonGreen title="Acheter" size="medium" />
              </div>
            </div>
          ) : (
            <span>Cet article n'existe plus</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
