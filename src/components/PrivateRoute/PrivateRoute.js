import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { LOGIN } from '../../constants/routes';

function PrivateRoute({ component: Component }) {
  const isAuthorization = useSelector(({ authorization }) => authorization.token);
  return isAuthorization ? <Component /> : <Navigate to={LOGIN} />;
}

PrivateRoute.propTypes = {
  component: PropTypes.element,
};

PrivateRoute.defaultProps = {
  component: null,
};

export default PrivateRoute;
