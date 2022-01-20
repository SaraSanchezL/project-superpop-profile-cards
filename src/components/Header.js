import superPopLogo from "../images/superpop-logo.png";
function Header() {
  return (  <header className="header">
    <a href="./index.html">
      <img
        className="header__img"
        src={superPopLogo}
        alt="awesome profile cards"
      />
    </a>
  </header>
  );
}
export default Header;