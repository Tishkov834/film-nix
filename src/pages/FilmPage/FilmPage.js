import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFilm } from '../../api/films';

function FilmPage() {
  const [film, setFilm] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getFilm(id)
      .then(({ data }) => setFilm(data))
      .catch(({ message }) => alert.error(message));
  }, []);

  return <h1>{film.name}</h1>;
}

export default FilmPage;
