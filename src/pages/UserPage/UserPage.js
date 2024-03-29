import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import FilmsList from '../../components/FilmsList';
import Layout from '../../components/Layout';
import Loader from '../../components/Loader';
import EmptyFilmsMessage from '../../components/EmptyFilmsMessage';
import { ADD_FILM_PAGE } from '../../constants/routes';
import { getUserFilms } from '../../api/films';
import './styles.scss';

function UserPage() {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { id, name } = useSelector(({ authorization }) => authorization.user);

  useEffect(() => {
    setIsLoading(true);

    getUserFilms(id)
      .then(({ data }) => setFilms(data))
      .catch(({ message }) => alert.error(message))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const onFilmDelete = (filmId) => {
    setFilms(films.filter((film) => film.id !== filmId));
  };

  return (
    <Layout titleText={`Welcome, ${name}`}>
      <div className="user-page">
        <h1 className="user-page-title">My movies</h1>
        <Link to={ADD_FILM_PAGE} className="user-page-link">Add Film</Link>
      </div>
      {films.length ? <FilmsList films={films} onFilmDelete={onFilmDelete} /> : isLoading && <Loader /> || <EmptyFilmsMessage text={"You haven't added any films yet"} />}
    </Layout>
  );
}

export default UserPage;
