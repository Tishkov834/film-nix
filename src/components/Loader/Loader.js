import PropTypes from 'prop-types';
import { Rings } from 'react-loader-spinner';
import './styles.scss';

function Loader({ height, width }) {
  return (
    <div className="loader">
      <Rings
        height={height}
        width={width}
        color="white"
        ariaLabel="loading"
      />
    </div>
  );
}

Loader.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
};

Loader.defaultProps = {
  height: '150',
  width: '150',
};

export default Loader;
