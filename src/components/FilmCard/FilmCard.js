import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { removeFilm } from '../../api/films';
import { FILM_PAGE, USER_PAGE } from '../../constants/routes';
import './styles.scss';

function FilmCard({
  imageUrl, name, year, id, onFilmDelete,
}) {
  const [isDeleting, setIsDeleting] = useState(false);
  const { pathname } = useLocation();

  const handleRemoveFilm = (event) => {
    event.preventDefault();
    setIsDeleting(true);

    removeFilm(id)
      .then(() => onFilmDelete(id))
      .catch(({ message }) => alert.error(message))
      .finally(() => {
        setIsDeleting(false);
      });
  };

  return (
    <Link to={`${FILM_PAGE}/${id}`} className="card-link">
      <div className="card-body">
        <img className="card-body-image" src={imageUrl} alt={name} />
        {(pathname === USER_PAGE) && (
        <button
          className="card-body-button"
          onClick={handleRemoveFilm}
          disabled={isDeleting}
        >
          Delete Film
        </button>
        )}
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
  onFilmDelete: PropTypes.func,
};

FilmCard.defaultProps = {
  imageUrl: '',
  name: '',
  year: '',
  id: null,
  onFilmDelete: () => {},
};

export default FilmCard;
