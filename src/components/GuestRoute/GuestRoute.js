import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { HOME_PAGE } from '../../constants/routes';

function GuestRoute({ component: Component }) {
  const isAuthorization = useSelector(({ authorization }) => authorization.token);
  return !isAuthorization ? <Component /> : <Navigate to={HOME_PAGE} />;
}

GuestRoute.propTypes = {
  component: PropTypes.element,
};

GuestRoute.defaultProps = {
  component: '',
};

export default GuestRoute;
