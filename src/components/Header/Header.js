import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { HOME_PAGE, LOGIN, REGISTRATION } from '../../constants/routes';
import { removeUser } from '../../store/authorization/authReducer';
import Logo from '../../images/logo.svg';
import Login from '../../images/icons/login.svg';
import Logout from '../../images/icons/logout.svg';
import './styles.scss';

function Header() {
  const isUserAuthorized = useSelector(({ authorization }) => authorization.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleLogout = () => {
    dispatch(removeUser());
    navigate(LOGIN);
  };

  return (
    <div className="header">
      <Link to={HOME_PAGE} className="header-logo">
        <img src={Logo} alt="logo" className="header-logo-image" />
        <p className="header-text">Film&NIX</p>
      </Link>
      {isUserAuthorized ? (
        <button className="header-button" onClick={handleLogout}>
          <p className="header-text">Logout</p>
          <img src={Logout} alt="login" className="header-link-image" />
        </button>
      ) : (
        <Link to={(pathname === LOGIN) ? REGISTRATION : LOGIN} className="header-link">
          <p className="header-text">{(pathname === LOGIN) ? 'Registration' : 'Login'}</p>
          <img src={Login} alt="login" className="header-link-image" />
        </Link>
      )}
    </div>
  );
}

export default Header;
