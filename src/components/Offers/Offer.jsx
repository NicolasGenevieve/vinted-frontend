import "./Offer.css";

const Offer = () => {
  return (
    <div className="offerWrap">
      <div className="user">
        <div className="userPhoto">
          <img src="../../src/assets/favicon.png" />
        </div>
        <div className="userName">Jessy99</div>
      </div>
      <div className="offerPicture">
        <img src="../../src/assets/offer-picture.png" />
      </div>
      <div className="offerPrice">5.90 €</div>
      <div className="offerDesc">
        <span>6 ANS / 110-116 CM</span>
        <span>H&M</span>
      </div>
    </div>
  );
};

export default Offer;
