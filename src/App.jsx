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
import Publish from "./pages/Publish.jsx";

//Components :
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ScrollToTop from "./components/Tools/ScrollToTop/ScrollToTop.jsx";
import Modal from "./components/Modal/Modal.jsx";

function App() {
  const [token, setToken] = useState(Cookies.get("vinted-token") || null);
  const [search, setSearch] = useState("");
  const [visible, setVisible] = useState(false);
  const [modalType, setModalType] = useState("");
  const [redirectPath, setRedirectPath] = useState(null);

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
        setVisible={setVisible}
        setModalType={setModalType}
        setRedirectPath={setRedirectPath}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              search={search}
              token={token}
              setVisible={setVisible}
              setModalType={setModalType}
              setRedirectPath={setRedirectPath}
            />
          }
        />
        <Route path="/offer/:id" element={<Product />} />
        <Route
          path="/signup"
          element={<Signup connexionStatus={connexionStatus} />}
        />
        <Route
          path="/login"
          element={<Login connexionStatus={connexionStatus} />}
        />
        <Route path="/publish" element={<Publish token={token} />} />
        <Route path="*" element={<All />} />
      </Routes>
      <Footer />
      {visible && (
        <Modal setVisible={setVisible}>
          {modalType === "login" && (
            <Login
              connexionStatus={connexionStatus}
              setVisible={setVisible}
              setModalType={setModalType}
              redirectPath={redirectPath}
              setRedirectPath={setRedirectPath}
            />
          )}
          {modalType === "signup" && (
            <Signup
              connexionStatus={connexionStatus}
              setVisible={setVisible}
              setModalType={setModalType}
            />
          )}
        </Modal>
      )}
    </Router>
  );
}

export default App;
