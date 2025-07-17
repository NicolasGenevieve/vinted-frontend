import Hero from "../components/Home/Hero/Hero.jsx";
import Offer from "../components/Home/Offers/Offer.jsx";

const Home = ({ search }) => {
  return (
    <main>
      {/* {console.log(product)} */}
      <Hero />
      <Offer search={search} />
    </main>
  );
};

export default Home;
