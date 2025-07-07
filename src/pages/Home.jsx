import { Link } from "react-router-dom";
import Hero from "../components/Hero/Hero.jsx";
import Offers from "../components/Offers/Offers.jsx";
import Product from "../pages/Product.jsx";

const Home = ({ product }) => {
  return (
    <main>
      {/* {console.log(product)} */}
      <Hero />
      <Offers product={product} />
      <Product />
    </main>
  );
};

export default Home;
