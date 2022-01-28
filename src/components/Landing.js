import {Link} from 'react-router-dom'
import superPopLogo from "../images/superpop-logo.png";
const Landing = () => {
  return (
    <>
      <main className="maincards">
        <img
          className="maincards__img"
          src={superPopLogo}
          alt="Awesome profile-cards"
        />
        <h1 className="maincards__title">Crea tu tarjeta de visita</h1>
        <p className="maincards__description">
          Crea tarjetas super molonas para ser ¡la más guay del insti!
        </p>

        <div>
          <ul className="maincards__list">
            <li className="maincards__list--item">
              <i className="far fa-object-ungroup icon"></i>
              <p>Diseña</p>
            </li>
            <li className="maincards__list--item">
              <i className="far fa-keyboard icon"></i>
              <p>Rellena</p>
            </li>
            <li className="maincards__list--item">
              <i className="fas fa-share-alt icon"></i>
              <p>Comparte</p>
            </li>
          </ul>
        </div>
        <Link className="maincards__button" to="/designcards">
          Comenzar
        </Link>
      </main>

      <footer className="page__footer">
        <h6 className="page__footer--title">Tarjetas super molonas @2021</h6>
        <img
          className="page__footer--logo"
          src={superPopLogo}
          alt="Logo SuperPop"
        />
      </footer>
    </>
  );
};

export default Landing;
