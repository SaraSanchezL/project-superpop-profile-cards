import "../stylesheets/App.scss";
import { useState, useEffect } from "react";
//Imagenes
import superPopLogo from "../images/superpop-logo.png";
import shareIconCard from "../images/address-card-regular (2).svg";
import imgShareTwitter from "../images/twitter.svg";
import imgShareLinkedin from "../images/linkedin.svg";
import imgShareFacebook from "../images/facebook.svg";
import FormFill from "./FormFill";
import ls from "../services/localStorage";
import PreviewBtnReset from "./PreviewBtnReset";
import PreviewIcons from "./PreviewIcons";
import Preview from "./Preview";
import FormDesign from "./FormDesign";
import Header from "./Header";

function App() {
  const [data, setData] = useState(
    ls.get("localData", {
      palette: "1",
      name: "",
      job: "",
      email: "",
      phone: "",
      linkedin: "",
      github: "",
      photo: "Photo",
    })
  );

  useEffect(() => {
    ls.set("localData", data);
  });

  const handleInput = (value,name) => {
    const inputChange = name;
    setData({
      ...data,
      [inputChange]: value,
    });
  };

  const handleReset = () => {
    setData({
      palette: "1",
      name: "",
      job: "",
      email: "",
      phone: "",
      linkedin: "",
      github: "",
      photo: "Photo",
    });
  };

  const [collapsablePalette, setcollapsablePalette] = useState(false);
  const [collapsableFill, setcollapsableFill] = useState(true);
  const [collapsableShare, setcollapsableShare] = useState(true);

  const handleCollapsable = (ev) => {
    const oneID = ev.currentTarget.id;
    if (oneID === "legend-design") {
      setcollapsablePalette(!collapsablePalette);
    } else if (oneID === "legend-fill") {
      setcollapsableFill(!collapsableFill);
    } else if (oneID === "legend-share") {
      setcollapsableShare(!collapsableShare);
    }
  };

  return (
    <div className="App">
      <Header />

      <main className="designmain">
        <section className="card-container">
          <div className="container">
            <PreviewBtnReset handleReset={handleReset} />

            <article className="card">
              <Preview
                dataPalette={data.palette}
                dataName={data.name}
                dataJob={data.job}
              />

              <div className="card__photo profile__preview js__profile-preview"></div>
              <ul className="card__list">
                <PreviewIcons
                  link={`tel:${data.phone}` || "/"}
                  dataPalette={data.palette}
                  className={`fas fa-mobile-alt card__list--icon-1 cardicon-js icon-${data.palette}`}
                />

                <PreviewIcons
                  link={`mailto:${data.email || "mailto:email@email.com"}`}
                  dataPalette={data.palette}
                  className={`far fa-envelope cardicon-js icon-${data.palette}`}
                />

                <PreviewIcons
                  link={`//${data.linkedin}`}
                  dataPalette={data.palette}
                  className={`fab fa-linkedin-in card__list--icon-1 cardicon-js icon-${data.palette}`}
                />

                <PreviewIcons
                  link={`https://github.com/${data.github}`}
                  dataPalette={data.palette}
                  className={`fab fa-github-alt card__list--icon-1 cardicon-js icon-${data.palette}`}
                />
              </ul>
            </article>
          </div>
        </section>

        <form className="form-section" action="" id="form">
          <FormDesign/>

          <fieldset className="legend">
            <div
              className="js-legend legend__container"
              id="legend-fill"
              onClick={handleCollapsable}
            >
              <div className="legend__container--icon">
                <i
                  className="legend__icon far fa-keyboard icon"
                  alt="icono de relleno"
                  title="Rellena tu tarjeta"
                ></i>
                <legend className="legend__title">Rellena</legend>
              </div>
              <i
                title="Pulsa para desplegar"
                className={`legend__arrow fas ${
                  collapsableFill ? "fa-chevron-down" : "fa-chevron-up"
                }`}
                alt="arrow"
              ></i>
            </div>
            <div className={`fill-container ${collapsableFill ? "collapsed" : ""}`}>
              
              <FormFill handleInput={handleInput()} data={data} />

            </div>
          </fieldset>

          <fieldset className="legend">
            <div
              className="js-legend legend__container"
              id="legend-share"
              onClick={handleCollapsable}
            >
              <div className="legend__container--icon">
                <i
                  className="legend__icon far fa-address-card icon"
                  alt="icono de compartir"
                  title="Comparte tu tarjeta"
                ></i>
                <legend className="legend__title">Comparte</legend>
              </div>
              <i
                className={`legend__arrow fas ${
                  collapsableShare ? "fa-chevron-down" : "fa-chevron-up"
                }`}
                alt="arrow"
                title="Click to open"
              ></i>
            </div>
            <div
              className={`sharecontainer ${
                collapsableShare ? "collapsed" : ""
              }`}
            >
              <section className="share_button">
                <button
                  type="submit"
                  className="share_button__item sharebuttonorange"
                  disabled
                >
                  <img
                    className="share_button__item--img"
                    src={shareIconCard}
                    title="icon"
                    alt="Comparte"
                  />
                  Crear Tarjeta
                </button>
              </section>

              <section className="share_creation collapsed">
                <div className="share_button__item--line"></div>
                <h3 className="share_creation__title">
                  La tarjeta ha sido creada:
                </h3>
                <a
                  href="./#"
                  target="_blank"
                  className="share_creation__link href js-shareCreationLink"
                  src="https://awesome-profile-card.com?id=A456DF0001"
                >
                  https://awesome-profile-card.com?id=A456DF0001
                </a>

                <a
                  target="_blank"
                  className="share_creation__twitter js-share-RRSS"
                  href="./#"
                >
                  <img
                    className="share_creation__twitter--img"
                    src={imgShareTwitter}
                    alt="Comparte Twitter"
                  />
                  Compartir en Twitter
                </a>
                <a
                  className="share_creation__linkedin js-share-RRSS"
                  href="./#"
                  target="_blank"
                >
                  <img
                    className="share_creation__linkedin--img"
                    src={imgShareLinkedin}
                    alt="Comparte Linkedin"
                  />
                  Comparte en LinkedIn
                </a>
                <a
                  className="share_creation__facebook js-share-RRSS"
                  href="./#"
                  target="_blank"
                >
                  <img
                    className="share_creation__facebook--img"
                    src={imgShareFacebook}
                    alt="Comparte Facebook"
                  />
                  Comparte en Facebook
                </a>
              </section>
            </div>
          </fieldset>
        </form>
      </main>
      <footer className="page__footer">
        <h6 className="page__footer--title">Tarjetas super molonas @2021</h6>
        <img
          className="page__footer--logo"
          src={superPopLogo}
          alt="Logo de SuperPop"
        />
      </footer>
    </div>
  );
}

export default App;
