import PropTypes from 'prop-types';
import './styles.scss';

function FilmsList({ films }) {
  return (
    <ul className="films-list">
      {films.map(({
        name, year, imageUrl, id,
      }) => (
        <li className="films-list-card" key={id}>
          <img className="films-list-card-image" src={imageUrl} alt="film-poster" />
          <div className="films-list-card-info">
            <p className="films-list-card-info-name">{name}</p>
            <span className="films-list-card-info-year">{year}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}

FilmsList.propTypes = {
  films: PropTypes.instanceOf(Array),
};

FilmsList.defaultProps = {
  films: [],
};

export default FilmsList;
