import "../components/Payment/Payment.css";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/Payment/CheckoutForm";
import displayPrice from "../utils/displayPrice";

const stripePromise = loadStripe(
  "pk_test_51HCObyDVswqktOkX6VVcoA7V2sjOJCUB4FBt3EOiAdSz5vWudpWxwcSY8z2feWXBq6lwMgAb5IVZZ1p84ntLq03H00LDVc2RwP"
);

const Payment = ({ token }) => {
  const location = useLocation();
  const { title, price } = location.state || {};

  const protectionFees = (Number(price) * 10) / 100;
  const deliveryFees = (Number(price) * 20) / 100;

  const total = Number(price) + protectionFees + deliveryFees;

  const options = {
    mode: "payment",
    amount: Number((price * 100).toFixed(0)),
    currency: "eur",
  };

  if (!price || Number(price) <= 0) return <Navigate to="/" />;

  return !token ? (
    <Navigate to="/login" />
  ) : (
    <section className="productWrap">
      <div className="paymentWrap">
        <div className="paymentInfo">
          <h1>Résumé de la commande</h1>
          <p>
            Article : <span style={{ fontWeight: "700" }}>{title}</span>
          </p>
          <div className="command">
            <span>Commande : </span>
            <span>{displayPrice(price)}</span>
          </div>
          <div className="command">
            <span>Frais protection acheteurs : </span>
            <span>{displayPrice(protectionFees)}</span>
          </div>
          <div className="command">
            <span>Frais de port : </span>
            <span>{displayPrice(deliveryFees)}</span>
          </div>
          <div className="command" style={{ marginTop: "50px" }}>
            <span style={{ fontWeight: "700" }}>TOTAL : </span>
            <span style={{ fontWeight: "700" }}>{displayPrice(total)}</span>
          </div>
          <span style={{ marginTop: "30px" }}>
            Il ne vous reste plus qu'une étape pour vous offrir{" "}
            <strong>{title}</strong>. Vous allez payer{" "}
            <strong>{displayPrice(total)}</strong> (frais de protection et frais
            de port inclus).
          </span>
        </div>
        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm
            title={title}
            amount={Number((total * 100).toFixed(0))}
          />
        </Elements>
      </div>
    </section>
  );
};

export default Payment;
