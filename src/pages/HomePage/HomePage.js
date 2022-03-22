import { useState, useEffect } from 'react';
import { useAlert } from 'react-alert';
import { useNavigate } from 'react-router-dom';
import FilmsList from '../../components/FilmsList';
import Layout from '../../components/Layout';
import SearchInput from '../../components/SearchInput';
import Loader from '../../components/Loader';
import { getAllFilms } from '../../api/films';
import { SEARCH_RESULT_PAGE } from '../../constants/routes';

function HomePage() {
  const [films, setFilms] = useState([]);
  const [query, setQuery] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const alert = useAlert();
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);

    getAllFilms()
      .then(({ data }) => setFilms(data))
      .catch(({ message }) => alert.error(message))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const handleSearchFilm = () => {
    navigate(`${SEARCH_RESULT_PAGE}/?q=${query}`);
  };

  return (
    <Layout titleText="Movies">
      <SearchInput onSubmit={handleSearchFilm} value={query} onChange={(event) => setQuery(event.target.value)} />
      <FilmsList films={films} />
      {isLoading && <Loader />}
    </Layout>
  );
}

export default HomePage;
