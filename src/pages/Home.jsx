import Hero from "../components/Hero/Hero.jsx";
import Offers from "../components/Offers/Offers.jsx";

const Home = ({ product }) => {
  return (
    <main>
      {/* {console.log(product)} */}
      <Hero />
      <Offers product={product} />
    </main>
  );
};

export default Home;
