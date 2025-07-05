import "./Product.css";
import User from "../components/User/User";
import ButtonGreen from "../components/Buttons/ButtonGreen";

const Product = () => {
  return (
    <div className="productWrap">
      <div className="productWrap2">
        <div className="container">
          <div className="product">
            <div className="productPicture">
              {" "}
              <img src="../../src/assets/offer-picture.png" />
            </div>

            <div className="productDescription">
              <span className="price">5.90€</span>
              <div className="productDetailWrap">
                <div className="productDetailCriteria">
                  <span>MARQUE</span>
                  <span>TAILLE</span>
                  <span>ETAT</span>
                  <span>COULEUR</span>
                  <span>EMPLACEMENT</span>
                  <span>MODE DE PAIEMENT</span>
                </div>
                <div className="productDetail">
                  <span>MARQUE</span>
                  <span>TAILLE</span>
                  <span>ETAT</span>
                  <span>COULEUR</span>
                  <span>EMPLACEMENT</span>
                  <span>MODE DE PAIEMENT</span>
                </div>
              </div>
              <h1>Robe H&M 4/6 ans 🌟 Vestido H&M 4/6 años</h1>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti aut earum possimus nostrum voluptatem natus ratione
                ipsa quam autem atque beatae deleniti hic, nobis accusantium
                fugit ipsum officia temporibus. Omnis?
              </p>
              <User />
              <ButtonGreen title="Acheter" size="medium" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
