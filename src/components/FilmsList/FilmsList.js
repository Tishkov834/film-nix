import PropTypes from 'prop-types';
import FilmCard from '../FilmCard';
import './styles.scss';

function FilmsList({ films }) {
  return (
    <ul className="films-list">
      {films.map(({
        name, year, imageUrl, id,
      }) => (
        <li className="films-list-card" key={id}>
          <FilmCard imageUrl={imageUrl} name={name} year={year} id={id} />
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
