import superPopLogo from "../images/superpop-logo.png";
import {Link} from 'react-router-dom'
function Header() {
  return (  <header className="header">
    <Link to="/">
      <img
        className="header__img"
        src={superPopLogo}
        alt="awesome profile cards"
      />
    </Link>
  </header>
  );
}
export default Header;