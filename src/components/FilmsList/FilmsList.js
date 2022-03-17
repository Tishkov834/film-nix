import PropTypes from 'prop-types';
import FilmCard from '../FilmCard';
import './styles.scss';

function FilmsList({ films, onFilmDelete }) {
  return (
    <ul className="films-list">
      {films.map(({
        name, year, imageUrl, id,
      }) => (
        <li className="films-list-card" key={id}>
          <FilmCard imageUrl={imageUrl} name={name} year={year} id={id} onFilmDelete={onFilmDelete} />
        </li>
      ))}
    </ul>
  );
}

FilmsList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    year: PropTypes.string,
    imageUrl: PropTypes.string,
    id: PropTypes.number,
  })),
  onFilmDelete: PropTypes.func,
};

FilmsList.defaultProps = {
  films: [],
  onFilmDelete: () => {},
};

export default FilmsList;
