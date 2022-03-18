import { useState, useEffect } from 'react';
import { useAlert } from 'react-alert';
import { useNavigate } from 'react-router-dom';
import FilmsList from '../../components/FilmsList';
import Layout from '../../components/Layout';
import SearchInput from '../../components/SearchInput';
import { getAllFilms } from '../../api/films';
import { SEARCH_RESULT_PAGE } from '../../constants/routes';

function HomePage() {
  const [films, setFilms] = useState([]);
  const [query, setQuery] = useState([]);
  const alert = useAlert();
  const navigate = useNavigate();

  useEffect(() => {
    getAllFilms()
      .then(({ data }) => setFilms(data))
      .catch(({ message }) => alert.error(message));
  }, []);

  const handleSearchFilm = () => {
    navigate(`${SEARCH_RESULT_PAGE}/?q=${query}`);
  };

  return (
    <Layout titleText="Movies">
      <SearchInput onSubmit={handleSearchFilm} value={query} onChange={(event) => setQuery(event.target.value)} />
      <FilmsList films={films} />
    </Layout>
  );
}

export default HomePage;
