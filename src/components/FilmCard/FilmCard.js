import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FILM_PAGE } from '../../constants/routes';
import './styles.scss';

function FilmCard({
  imageUrl, name, year, id,
}) {
  return (
    <Link to={`${FILM_PAGE}/${id}`} className="card-link">
      <div className="card-body">
        <img className="card-body-image" src={imageUrl} alt={name} />
        <div className="card-body-info">
          <p className="card-body-info-name">{name}</p>
          <span className="card-body-info-year">{year}</span>
        </div>
      </div>
    </Link>
  );
}

FilmCard.propTypes = {
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  year: PropTypes.string,
  id: PropTypes.number,
};

FilmCard.defaultProps = {
  imageUrl: '',
  name: '',
  year: '',
  id: null,
};

export default FilmCard;
