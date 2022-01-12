import superPopLogo from "../images/superpop-logo.png";
import trashRegular from "../images/trash-alt-regular.svg";
import "../stylesheets/App.scss";
import { useState } from "react";

function App() {
  const [data, setData] = useState({
    palette: 1,
    name: "",
    job: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
  });

  const handleInput = (event) => {
    const inputChange = event.currentTarget.name;

    if (inputChange === "name") {
      setData({
        ...data,
        name: event.currentTarget.value,
      });
    }else if(inputChange === "email"){
      setData({
        ...data,
        email : event.currentTarget.value,
      })
    }else if(inputChange === "phone"){
      setData({
        ...data,
        phone: event.currentTarget.value,
      })
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
            >
              <span className="reset__button--icon">
                <img src={trashRegular} alt="Icono de Papelera" />
              </span>
              <small className="reset__button--reset"> Reset</small>
            </button>
            <article className="card">
              <div className="card__title">
                <div className="card__title--rectangle rectangle-js rectangleblue"></div>
                <div className="card__title--text">
                  <h3 className="name nameblue js-nameInput fullname-js">
                    {data.name || 'nombre y apellidos'}
                  </h3>
                  <h4 className="subtitle js-jobInput">Front-end developer</h4>
                </div>
              </div>
              <div className="card__photo profile__preview js__profile-preview"></div>
              <ul className="card__list">
                <li>
                  <div className="card__list--icon icon-js blueiconcircle ">
                    <a href={data.phone || "/"}>
                      <i
                        className="fas fa-mobile-alt card__list--icon-1 cardicon-js blueicon"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="card__list--icon icon-js blueiconcircle ">
                    <a
                      href={`mailto: ${data.email || "mailto:email@email.com"}`}
                      className="js_preview_email card__list--icon-1"
                    >
                      <i
                        className="far fa-envelope cardicon-js blueicon"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="card__list--icon icon-js blueiconcircle">
                    <a href="./#" className="js-linkedin-link" target="_blank">
                      <i
                        className="fab fa-linkedin-in card__list--icon-1 cardicon-js blueicon"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="card__list--icon icon-js blueiconcircle ">
                    <a href="./#" className="js-github-link" target="_blank">
                      <i
                        className="fab fa-github-alt card__list--icon-1 cardicon-js blueicon"
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
            <div className="js-legend legend__container">
              <div className="legend__container--icon">
                <img
                  className="legend__icon"
                  src="./assets/images/design-icon.svg"
                  alt="icono de diseño"
                  title="diseña tu tarjeta"
                />
                <legend className="legend__title">diseña</legend>
              </div>
              <img
                className="legend__arrow"
                src="./assets/images/arrow-icon.svg"
                alt="arrow"
                title="Click to open"
              />
            </div>
            <div className="design-container js-container">
              <h4 className="design__title">Colores</h4>
              <div className="options-container">
                <label className="design__label" htmlFor="blue-green">
                  <input
                    className="design__radio"
                    type="radio"
                    name="color-palet"
                    id="blue-green"
                    value="1"
                    checked=""
                  />
                  <div className="design__color design__color--primary-blue"></div>
                  <div className="design__color design__color--dirty-blue"></div>
                  <div className="design__color design__color--green"></div>
                </label>

                <label className="design__label" htmlFor="red-orange">
                  <input
                    className="design__radio"
                    type="radio"
                    name="color-palet"
                    id="red-orange"
                    value="2"
                  />
                  <div className="design__color design__color--dried-blood"></div>
                  <div className="design__color design__color--red"></div>
                  <div className="design__color design__color--tomato"></div>
                </label>

                <label className="design__label" htmlFor="color-mix">
                  <input
                    className="design__radio"
                    type="radio"
                    name="color-palet"
                    id="color-mix"
                    value="3"
                  />
                  <div className="design__color design__color--slate"></div>
                  <div className="design__color design__color--yellow"></div>
                  <div className="design__color design__color--sky-blue"></div>
                </label>
              </div>
            </div>
          </fieldset>

          <fieldset className="legend">
            <div className="js-legend legend__container">
              <div className="legend__container--icon">
                <img
                  className="legend__icon"
                  src="./assets/images/fill-icon.svg"
                  alt="icono de relleno"
                  title="Rellena tu tarjeta"
                />
                <legend className="legend__title">Rellena</legend>
              </div>
              <img
                className="legend__arrow"
                src="./assets/images/arrow-icon.svg"
                alt="arrow"
                title="Click to open"
              />
            </div>
            <div className="fill-container">
              <label className="fill__label" htmlFor="name">
                Nombre completo
                <input
                  className="fill__input fill__input-js js-fullname"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Ej.: Sally Jill"
                  onChange={handleInput}
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
                />
              </label>
            </div>
          </fieldset>

          <fieldset className="legend">
            <div className="js-legend legend__container">
              <div className="legend__container--icon">
                <img
                  className="legend__icon"
                  src="./assets/images/share-icon.svg"
                  alt="icono de compartir"
                  title="Comparte tu tarjeta"
                />
                <legend className="legend__title">Comparte</legend>
              </div>
              <img
                className="legend__arrow"
                src="./assets/images/arrow-icon.svg"
                alt="arrow"
                title="Click to open"
              />
            </div>
            <div className="sharecontainer collapsed">
              <section className="share_button">
                <button
                  type="submit"
                  className="share_button__item sharebuttonorange"
                >
                  <img
                    className="share_button__item--img"
                    src="./assets/images/address-card-regular (2).svg"
                    title="icon"
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
                    src="./assets/images/twitter.svg"
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
                    src="./assets/images/linkedin.svg"
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
                    src="./assets/images/facebook.svg"
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
          src="./assets/images/superpop-logo.png"
          alt="Logo de SuperPop"
        />
      </footer>
    </div>
  );
}

export default App;
