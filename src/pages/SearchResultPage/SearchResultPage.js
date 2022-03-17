import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '../../components/Layout';
import FilmsList from '../../components/FilmsList';
import { searchFilms } from '../../api/films';
import EmptySearchResult from '../../components/EmptySearchResult';

function SearchResultPage() {
  const [films, setFilms] = useState([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');

  useEffect(() => {
    searchFilms(query)
      .then(({ data }) => setFilms(data))
      .catch(({ message }) => alert.error(message));
  }, []);

  return (
    <Layout titleText={`Search Results for : "${query}"`}>
      {films.length ? <FilmsList films={films} /> : <EmptySearchResult text={query} />}
    </Layout>
  );
}

export default SearchResultPage;
