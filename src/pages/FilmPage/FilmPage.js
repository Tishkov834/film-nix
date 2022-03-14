import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFilm } from '../../api/films';
import FilmDetailCard from '../../components/FilmDetailCard';

function FilmPage() {
  const [film, setFilm] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getFilm(id)
      .then(({ data }) => setFilm(data))
      .catch(({ message }) => alert.error(message));
  }, []);

  return (film && <FilmDetailCard film={film} />);
}

export default FilmPage;
