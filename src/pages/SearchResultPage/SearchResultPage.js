import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '../../components/Layout';
import FilmsList from '../../components/FilmsList';
import { searchFilms } from '../../api/films';
import EmptySearchResult from '../../components/EmptySearchResult';
import Loader from '../../components/Loader';

function SearchResultPage() {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');

  useEffect(() => {
    setIsLoading(true);

    searchFilms(query)
      .then(({ data }) => setFilms(data))
      .catch(({ message }) => alert.error(message))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <Layout titleText={`Search Results for : "${query}"`}>
      {films.length ? <FilmsList films={films} /> : isLoading && <Loader /> || <EmptySearchResult text={query} />}
    </Layout>
  );
}

export default SearchResultPage;
