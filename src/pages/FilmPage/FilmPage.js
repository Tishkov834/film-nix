import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFilm } from '../../api/films';
import FilmDetailCard from '../../components/FilmDetailCard';
import Loader from '../../components/Loader';

function FilmPage() {
  const [film, setFilm] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);

    getFilm(id)
      .then(({ data }) => setFilm(data))
      .catch(({ message }) => alert.error(message))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {film && <FilmDetailCard film={film} />}
      {isLoading && <Loader />}
    </>
  );
}

export default FilmPage;
