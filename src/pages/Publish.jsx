import "../components/Publish/Publish.css";
import { Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { RxCrossCircled } from "react-icons/rx";
import axios from "axios";

import AddPhoto from "../components/Tools/Buttons/AddPhoto";
import PublishInput from "../components/Tools/Input/PublishInput";
import ButtonGreen from "../components/Tools/Buttons/ButtonGreen";

const Publish = ({ token }) => {
  const [photo, setPhoto] = useState(null);
  const [preview, setPreview] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("0");
  const [error, setError] = useState("");
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    if (photo) {
      const objectUrl = URL.createObjectURL(photo);
      setPreview(objectUrl);

      return () => URL.revokeObjectURL(objectUrl); // nettoyage mémoire
    } else {
      setPreview(null);
    }
  }, [photo]);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsClicking(true);
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("condition", state);
      formData.append("city", city);
      formData.append("brand", brand);
      formData.append("size", size);
      formData.append("color", color);
      formData.append("picture", photo);

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response.data._id);
      navigate(`/offer/${response.data._id}`);
    } catch (error) {
      console.log(error.response.data.message);
      if (
        error.response.data.message === "title, price and picture are required"
      ) {
        setError(
          "Une photo de l'article avec au moins son titre et son prix est requis"
        );
      }
    }
  };

  return !token ? (
    <Navigate to="/login" />
  ) : (
    <section className="productWrap">
      <div className="container">
        <section className="publish">
          <h1 className="titlePublish">Vends ton article</h1>
          <form className="formPublish" onSubmit={handleSubmit}>
            <div className="preview">
              {!photo && (
                <AddPhoto
                  onChange={(event) => {
                    setPhoto(event.target.files[0]);
                  }}
                />
              )}

              {photo && (
                <div className="picturePreview">
                  <img src={preview} alt="Preview" />
                  <button
                    className="close"
                    type="button"
                    onClick={() => setPhoto(null)}
                  >
                    <RxCrossCircled className="cross" />
                  </button>
                </div>
              )}
            </div>
            <div className="preview">
              <PublishInput
                optionTitle="Titre"
                type="text"
                placeholder="ex : Veste"
                value={title}
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
              />

              <div className="inputWrap">
                <h2 className="productInfo">Description</h2>
                <textarea
                  rows={6}
                  cols={20}
                  className="aeraPublish"
                  placeholder="ex : Jamais porté"
                  value={description}
                  onChange={(event) => {
                    setDescription(event.target.value);
                  }}
                ></textarea>
              </div>
            </div>

            <div className="preview">
              <PublishInput
                optionTitle="Marque"
                type="text"
                placeholder="ex : Zara"
                value={brand}
                onChange={(event) => {
                  setBrand(event.target.value);
                }}
              />
              <PublishInput
                optionTitle="Taille"
                type="text"
                placeholder="ex : Medium"
                value={size}
                onChange={(event) => {
                  setSize(event.target.value);
                }}
              />
              <PublishInput
                optionTitle="Couleur"
                type="text"
                placeholder="ex : Bleu marine"
                value={color}
                onChange={(event) => {
                  setColor(event.target.value);
                }}
              />
              <PublishInput
                optionTitle="Etat"
                type="text"
                placeholder="ex : Neuf avec étiquette  "
                value={state}
                onChange={(event) => {
                  setState(event.target.value);
                }}
              />
              <PublishInput
                optionTitle="Lieu"
                type="text"
                placeholder="ex : Paris"
                value={city}
                onChange={(event) => {
                  setCity(event.target.value);
                }}
              />
              <PublishInput
                optionTitle="Prix"
                type="numer"
                placeholder="ex : 10,00 €"
                value={price}
                onChange={(event) => {
                  setPrice(event.target.value);
                }}
              />
            </div>
            {error && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "30px",
                  color: "red",
                }}
              >
                <span>{error}</span>
              </div>
            )}
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                marginTop: "50px",
              }}
            >
              <div style={{ width: "40%" }}>
                <ButtonGreen
                  title="Publier mon offre"
                  size="medium"
                  disabled={isClicking}
                  onClick={() => {
                    console.log("cliqué !");
                  }}
                />
              </div>
            </div>
          </form>
        </section>
      </div>
    </section>
  );
};

export default Publish;
