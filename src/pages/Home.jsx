import Hero from "../components/Home/Hero/Hero.jsx";
import Offer from "../components/Home/Offers/Offer.jsx";

const Home = ({ search, token, setVisible, setModalType, setRedirectPath }) => {
  return (
    <main>
      {/* {console.log(product)} */}
      <Hero
        token={token}
        setVisible={setVisible}
        setModalType={setModalType}
        setRedirectPath={setRedirectPath}
      />
      <Offer search={search} />
    </main>
  );
};

export default Home;
