import superPopLogo from "../images/superpop-logo.png";
function Footer() {
    return (
        <footer className="page__footer">
          <h6 className="page__footer--title">Tarjetas super molonas @2021</h6>
          <img
            className="page__footer--logo"
            src={superPopLogo}
            alt="Logo de SuperPop"
          />
        </footer>
    )
}
export default Footer;