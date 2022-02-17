import { Link } from 'react-router-dom';
import { HOME_PAGE, LOGIN } from '../../constants/routes';
import Logo from '../../images/logo.svg';
import Login from '../../images/icons/login.svg';
import './styles.scss';

function Header() {
  return (
    <div className="header">
      <Link to={HOME_PAGE} className="header-logo">
        <img src={Logo} alt="logo" className="header-logo-image" />
        <p className="header-text">Film&NIX</p>
      </Link>
      <Link to={LOGIN} className="header-link">
        <p className="header-text">Login</p>
        <img src={Login} alt="login" className="header-link-image" />
      </Link>
    </div>
  );
}

export default Header;
