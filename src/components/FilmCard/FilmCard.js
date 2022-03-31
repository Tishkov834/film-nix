import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { removeFilm } from '../../api/films';
import ConfirmModal from '../common/ConfirmModal';
import { FILM_PAGE, USER_PAGE } from '../../constants/routes';
import { DELETE_FILM_MESSAGE } from '../../constants/messages';
import NoPoster from '../../images/no-poster.jpeg';
import './styles.scss';

function FilmCard({
  imageUrl, name, year, id, onFilmDelete,
}) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [isModalDeleteOpen, setModalDeleteOpen] = useState(false);
  const { pathname } = useLocation();

  const handleRemoveFilm = (event) => {
    event.preventDefault();
    setModalDeleteOpen(true);
  };

  const onDelete = () => {
    setIsDeleting(true);

    removeFilm(id)
      .then(() => onFilmDelete(id))
      .catch(({ message }) => alert.error(message))
      .finally(() => {
        setIsDeleting(false);
        setModalDeleteOpen(false);
      });
  };

  const onCloseModalDelete = () => setModalDeleteOpen(false);

  return (
    <>
      <Link to={`${FILM_PAGE}/${id}`} className="card-link">
        <div className="card-content">
          <img
            className="card-content-image"
            src={imageUrl}
            alt={name}
            onError={(e) => {
              e.target.src = NoPoster;
            }}
          />
          {(pathname === USER_PAGE) && (
          <button
            className="card-content-button"
            onClick={handleRemoveFilm}
            disabled={isDeleting}
          >
            Delete Film
          </button>
          )}
          <div className="card-content-info">
            <p className="card-content-info-name">{name}</p>
            <span className="card-content-info-year">{year}</span>
          </div>
        </div>
      </Link>
      {isModalDeleteOpen && (
      <ConfirmModal
        onDelete={onDelete}
        onClose={onCloseModalDelete}
        message={DELETE_FILM_MESSAGE}
      />
      )}
    </>
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
