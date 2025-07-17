import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";

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
  const [token, setToken] = useState(Cookies.get("vinted-token") || null);
  const [search, setSearch] = useState("");

  const connexionStatus = (token) => {
    if (token) {
      Cookies.set("vinted-token", token, { expires: 14 });
    } else {
      Cookies.remove("vinted-token");
    }
    setToken(token);
  };

  return (
    <Router>
      <ScrollToTop />
      <Header
        token={token}
        connexionStatus={connexionStatus}
        search={search}
        setSearch={setSearch}
      />
      <Routes>
        <Route path="/" element={<Home search={search} />} />
        <Route path="/offer/:id" element={<Product />} />
        <Route
          path="/signup"
          element={<Signup connexionStatus={connexionStatus} />}
        />
        <Route
          path="/login"
          element={<Login connexionStatus={connexionStatus} />}
        />
        <Route path="*" element={<All />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
