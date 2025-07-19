import "./Payment.css";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useState } from "react";
import axios from "axios";
import ButtonGreen from "../Tools/Buttons/ButtonGreen";
import { Link } from "react-router-dom";

const CheckoutForm = ({ title, amount }) => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [success, setSuccess] = useState(false);
  const [isPaying, setIsPaying] = useState(false);

  const stripe = useStripe();

  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsPaying(true);

    try {
      if (elements == null) {
        return;
      }

      const { error: submitError } = await elements.submit();
      if (submitError) {
        setErrorMessage(submitError.message);
        return;
      }

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/v2/payment",
        { title: title, amount: amount }
      );
      console.log(response.data);

      const clientSecret = response.data.client_secret;

      const { error } = await stripe.confirmPayment({
        elements: elements,

        clientSecret: clientSecret,

        confirmParams: {
          return_url: "http://localhost:5173/",
        },

        redirect: "if_required",
      });

      if (error) {
        setErrorMessage(error.message);
      } else {
        setSuccess(true);
      }
      setIsPaying(false);
    } catch (error) {
      console.log(error);
    }
  };

  return success ? (
    <>
      <p
        style={{ fontWeight: "700", paddingTop: "50px", paddingBottom: "30px" }}
      >
        Merci de votre achat
      </p>
      <Link to="/" style={{ paddingBottom: "50px" }}>
        Retour à l'accueil
      </Link>
    </>
  ) : (
    <div className="stripeWrap">
      <form className="stripe" onSubmit={handleSubmit}>
        <PaymentElement />
        <ButtonGreen
          type="submit"
          disabled={!stripe || !elements || isPaying}
          size="mediumPay"
          title="Payer"
        />
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      </form>
    </div>
  );
};

export default CheckoutForm;
