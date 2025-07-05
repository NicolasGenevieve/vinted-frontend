import "./App.css";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Offers from "./components/Offers/Offers.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Offers />
      </main>
      <Footer />
    </>
  );
}

export default App;
