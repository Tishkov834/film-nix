import PropTypes from 'prop-types';
import './styles.scss';

function FilmCard({ imageUrl, name, year }) {
  return (
    <div className="card">
      <img className="card-image" src={imageUrl} alt={name} />
      <div className="card-info">
        <p className="card-info-name">{name}</p>
        <span className="card-info-year">{year}</span>
      </div>
    </div>
  );
}

FilmCard.propTypes = {
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  year: PropTypes.string,
};

FilmCard.defaultProps = {
  imageUrl: '',
  name: '',
  year: '',
};

export default FilmCard;
