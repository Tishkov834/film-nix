import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa';
import './styles.scss';

function Rating({ handleStarClick, rating }) {
  const rows = [];
  for (let i = 0; i <= 4; i += 1) {
    rows.push(<FaStar onClick={() => handleStarClick(i + 1)} className={i <= rating - 1 ? 'rating-star-click' : 'rating-star'} />);
  }

  return (
    <div className="rating">
      {rows}
    </div>
  );
}

Rating.propTypes = {
  handleStarClick: PropTypes.func,
  rating: PropTypes.number,
};

Rating.defaultProps = {
  handleStarClick: () => {},
  rating: 0,
};

export default Rating;
