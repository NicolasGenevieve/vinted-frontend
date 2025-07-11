import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Pages :
import Home from "./pages/Home";
import Product from "./pages/Product";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import All from "./pages/All.jsx";

//Components :
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ScrollToTop from "./components/Tools/ScrollToTop/ScrollToTop.jsx";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offer/:id" element={<Product />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<All />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
