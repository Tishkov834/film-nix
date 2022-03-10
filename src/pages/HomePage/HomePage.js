import { useState, useEffect } from 'react';
import { useAlert } from 'react-alert';
import FilmsList from '../../components/FilmsList';
import Layout from '../../components/Layout';
import { getAllFilms } from '../../api/films';

function HomePage() {
  const [films, setFilms] = useState([]);
  const alert = useAlert();

  useEffect(() => {
    getAllFilms()
      .then(({ data }) => setFilms(data))
      .catch(({ message }) => alert.error(message));
  }, []);

  return (
    <Layout titleText="Movies">
      <FilmsList films={films} />
    </Layout>
  );
}

export default HomePage;
