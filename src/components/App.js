import "../stylesheets/App.scss";
import { useState, useEffect } from "react";
//Imagenes
import superPopLogo from "../images/superpop-logo.png";
import trashRegular from "../images/trash-alt-regular.svg";
import shareIconCard from "../images/address-card-regular (2).svg"
import imgShareTwitter from "../images/twitter.svg";
import imgShareLinkedin from "../images/linkedin.svg"
import imgShareFacebook from "../images/facebook.svg"
import ls from "../services/localStorage"


function App() {
  const [data, setData] = useState(ls.get('localData', {
    palette: "1",
    name: "",
    job: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
  }));

  useEffect(() => {
    ls.set('localData', data)
  }, [data]);

  const handleInput = (event) => {
    const inputChange = event.currentTarget.name;
    setData({
      ...data,
      [inputChange]: event.currentTarget.value,
    })
  };

  const handleReset = () => {
    setData({
      palette: "1",
      name: "",
      job: "",
      email: "",
      phone: "",
      linkedin: "",
      github: ""
    });
  }
 
  const [collapsablePalette, setcollapsablePalette] = useState(false);
  const [collapsableFill, setcollapsableFill] = useState(true);
  const [collapsableShare, setcollapsableShare] = useState(true);


  const handleCollapsable = (ev) => {
    const oneID = ev.currentTarget.id;
    if (oneID === "legend-design") {
      setcollapsablePalette(!collapsablePalette);
    } else if (oneID === "legend-fill") {
    setcollapsableFill(!collapsableFill);
  } else if(oneID === "legend-share"){
    setcollapsableShare(!collapsableShare)
  }
  };

  return (
    <div className="App">
      <header className="header">
        <a href="./index.html">
          <img
            className="header__img"
            src={superPopLogo}
            alt="awesome profile cards"
          />
        </a>
      </header>

      <main className="designmain">
        <section className="card-container">
          <div className="container">
            <button
              className="reset__button js-resetBtn"
              type="reset"
              form="form"
              onClick={handleReset}
            >
              <span className="reset__button--icon">
                <img src={trashRegular} alt="Icono de Papelera" />
              </span>
              <small className="reset__button--reset"> Reset</small>
            </button>
            <article className="card">
              <div className="card__title">
                <div className={`card__title--rectangle rectangle-js rectangle-${data.palette}`}></div>
                <div className="card__title--text">
                  <h3 className={`name name-${data.palette} js-nameInput fullname-js`}>
                    {data.name || 'nombre y apellidos'}
                  </h3>
                  <h4 className="subtitle js-jobInput">
                    {data.job || 'Front-end Developer'}
                  </h4>
                </div>
              </div>
              <div className="card__photo profile__preview js__profile-preview"></div>
              <ul className="card__list">
                <li>
                  <div className={`card__list--icon icon-js iconcircle-${data.palette}`}>
                    <a href={`tel:${data.phone}` || "/"}>
                      <i
                        className={`fas fa-mobile-alt card__list--icon-1 cardicon-js icon-${data.palette}`}
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>
                </li>
                <li>
                  <div className={`card__list--icon icon-js iconcircle-${data.palette}`}>
                    <a
                      href={`mailto:${data.email || "mailto:email@email.com"}`}
                      className="js_preview_email card__list--icon-1"
                    >
                      <i
                        className={`far fa-envelope cardicon-js icon-${data.palette}`}
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>
                </li>
                <li>
                  <div className={`card__list--icon icon-js iconcircle-${data.palette}`}>
                    <a href={`//${data.linkedin}`} className="js-linkedin-link" target="_blank" rel="noreferrer">
                      <i
                        className={`fab fa-linkedin-in card__list--icon-1 cardicon-js icon-${data.palette}`}
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>
                </li>
                <li>
                  <div className={`card__list--icon icon-js iconcircle-${data.palette}`}>
                    <a href={`https://github.com/${data.github}`} className="js-github-link" target="_blank" rel="noreferrer">
                      <i
                        className={`fab fa-github-alt card__list--icon-1 cardicon-js icon-${data.palette}`}
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>
                </li>
              </ul>
            </article>
          </div>
        </section>

        <form className="form-section" action="" id="form">
          <fieldset className="legend">
            <div className="js-legend legend__container" id="legend-design" onClick={handleCollapsable}>
              <div className="legend__container--icon">
                <i className="legend__icon far fa-object-ungroup icon"
                  alt="icono de diseño"
                  title="diseña tu tarjeta">
                </i>
                <legend className="legend__title">diseña</legend>
              </div>
              <i
                title="Pulsa para desplegar"
                className={`legend__arrow fas ${collapsablePalette ? 'fa-chevron-down': 'fa-chevron-up'}`}
                alt="arrow">
              </i>
            </div>
            <div className={`design-container js-container ${collapsablePalette ? 'collapsed' : ''}`}>
              <h4 className="design__title">Colores</h4>
              <div className="options-container">
                <label className="design__label" htmlFor="blue-green">
                  <input
                    className="design__radio"
                    type="radio"
                    name="palette"
                    id="blue-green"
                    value="1"
                    checked={data.palette === "1"}
                    onChange={handleInput}
                  />
                  <div className="design__color design__color--primary-blue"></div>
                  <div className="design__color design__color--dirty-blue"></div>
                  <div className="design__color design__color--green"></div>
                </label>

                <label className="design__label" htmlFor="red-orange">
                  <input
                    className="design__radio"
                    type="radio"
                    name="palette"
                    id="red-orange"
                    value="2"
                    checked={data.palette === "2"}
                    onChange={handleInput}
                  />
                  <div className="design__color design__color--dried-blood"></div>
                  <div className="design__color design__color--red"></div>
                  <div className="design__color design__color--tomato"></div>
                </label>

                <label className="design__label" htmlFor="color-mix">
                  <input
                    className="design__radio"
                    type="radio"
                    name="palette"
                    id="color-mix"
                    value="3"
                    checked={data.palette === "3"}
                    onChange={handleInput}
                  />
                  <div className="design__color design__color--slate"></div>
                  <div className="design__color design__color--yellow"></div>
                  <div className="design__color design__color--sky-blue"></div>
                </label>
              </div>
            </div>
          </fieldset>

          <fieldset className="legend">
            <div className="js-legend legend__container" id="legend-fill" onClick={handleCollapsable}>
              <div className="legend__container--icon">
                <i className="legend__icon far fa-keyboard icon" alt="icono de relleno" title="Rellena tu tarjeta" ></i>
                <legend className="legend__title">Rellena</legend>
              </div>
              <i
                title="Pulsa para desplegar"
                className={`legend__arrow fas ${collapsableFill ? 'fa-chevron-down' : 'fa-chevron-up'}`} alt="arrow">
              </i>
            </div>
            <div className={`fill-container ${collapsableFill ? 'collapsed' : ''}`}>
              <label className="fill__label" htmlFor="name">
                Nombre completo
                <input
                  className="fill__input fill__input-js js-fullname"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Ej.: Sally Jill"
                  onChange={handleInput}
                  value={data.name}
                />
              </label>
              <label className="fill__label" htmlFor="job">
                Puesto
                <input
                  className="fill__input fill__input-js js-job"
                  type="text"
                  name="job"
                  id="job"
                  placeholder="Ej.: Front-end unicorn"
                  onChange={handleInput}
                  value={data.job}
                />
              </label>
              <div className="fill__label" htmlFor="profilePic">
                <p className="label__img">Imagen de perfil</p>
                <label
                  className="fill__btn js__profile-trigger"
                  htmlFor="img-selector"
                >
                  Añadir imagen
                </label>
                <input
                  className="action__hiddenField js__profile-upload-btn hidden"
                  type="file"
                  name="photo"
                  id="img-selector"
                />
                <div className="label__container profile">
                  <div className="fill__profile-pic profile__image js__profile-image"></div>
                </div>
              </div>
              <label className="fill__label" htmlFor="email">
                Email
                <input
                  className="fill__input fill__input-js js-email"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Ej.: sally-hill@gmail.com"
                  onChange={handleInput}
                  value={data.email}
                />
              </label>
              <label className="fill__label" htmlFor="phone">
                Teléfono
                <input
                  className="fill__input fill__input-js"
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Ej.: 555-555-555"
                  onChange={handleInput}
                  value={data.phone}
                />
              </label>
              <label className="fill__label" htmlFor="linkedin">
                Linkedin
                <input
                  className="fill__input fill__input-js"
                  type="text"
                  name="linkedin"
                  id="linkedin"
                  placeholder="Ej.: linkedin.com/in/sally.hill"
                  onChange={handleInput}
                  value={data.linkedin}
                />
              </label>
              <label className="fill__label" htmlFor="github">
                Github
                <input
                  className="fill__input fill__input-js"
                  type="text"
                  name="github"
                  id="github"
                  placeholder="Ej.: @sally-hill"
                  onChange={handleInput}
                  value={data.github}
                />
            </label>
            </div>
          </fieldset>

          <fieldset className="legend">
            <div className="js-legend legend__container" id="legend-share" onClick={handleCollapsable}>
              <div className="legend__container--icon">
                <i className="legend__icon far fa-address-card icon" alt="icono de compartir" title="Comparte tu tarjeta">
                </i>
                <legend className="legend__title">Comparte</legend>
              </div>
              <i
                className={`legend__arrow fas ${collapsableShare ? 'fa-chevron-down' : 'fa-chevron-up'}`}
                alt="arrow"
                title="Click to open">
              </i>
            </div>
            <div className={`sharecontainer ${collapsableShare ? 'collapsed' : ''}`}>
              <section className="share_button">
                <button
                  type="submit"
                  className="share_button__item sharebuttonorange" disabled
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