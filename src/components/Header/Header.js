import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  HOME_PAGE,
  LOGIN,
  REGISTRATION,
  USER_PAGE,
} from '../../constants/routes';
import { removeUser } from '../../store/authorization/authReducer';
import Logo from '../../images/logo.svg';
import Login from '../../images/icons/login.svg';
import Logout from '../../images/icons/logout.svg';
import User from '../../images/icons/user-icon.svg';
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
        <div className="header-link">
          <button className="header-button" onClick={handleLogout}>
            <p className="header-text">Logout</p>
            <img src={Logout} alt="logout" className="header-link-image" />
          </button>
          {(pathname === USER_PAGE)
            ? (
              <img src={User} alt="user" className="header-link-user-border" />
            )
            : (
              <Link to={USER_PAGE} className="header-link-user">
                <img src={User} alt="user" className="header-link-user-image" />
              </Link>
            )}
        </div>
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
