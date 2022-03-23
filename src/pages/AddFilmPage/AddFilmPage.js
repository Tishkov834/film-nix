import { useState } from 'react';
import { useAlert } from 'react-alert';
import { useSelector } from 'react-redux';
import { Form, Formik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { createFilm } from '../../api/films';
import { createFilmSchema } from '../../schemas/createFilmSchema';
import { USER_PAGE } from '../../constants/routes';
import back from '../../images/icons/back-icon.svg';
import AddFilmInput from '../../components/common/AddFilmInput';
import CastForm from '../../components/CastForm';
import Loader from '../../components/Loader';
import './styles.scss';

function AddFilmPage() {
  const [isLoading, setIsLoading] = useState(false);
  const alert = useAlert();
  const userId = useSelector(({ authorization }) => authorization.user.id);
  const navigate = useNavigate();

  const initialValues = {
    name: '',
    imageUrl: '',
    trailerUrl: '',
    year: '',
    genre: '',
    producer: '',
    distributor: '',
    director: '',
    story: '',
    cast: [],
  };

  const handleCreateFilm = (formValues) => {
    const fullFilmData = { ...formValues, userId };
    setIsLoading(true);

    createFilm(fullFilmData)
      .then(() => {
        alert.show('Film was Create!');
        navigate(USER_PAGE);
      })
      .catch(({ message }) => alert.error(message))
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="add-film">
      <div className="add-film-content">
        <div className="add-film-content-head">
          <Link className="add-film-content-head-back-link" to={USER_PAGE}>
            <img className="add-film-content-head-back-link-image" src={back} alt="back" />
          </Link>
          <h1 className="add-film-content-head-title">Add new film</h1>
        </div>
        <Formik onSubmit={handleCreateFilm} initialValues={initialValues} validationSchema={createFilmSchema}>
          <Form className="add-film-content-form">
            <AddFilmInput type="text" name="name" placeholderText="eg. Avenger" labelName="Name" />
            <AddFilmInput type="text" name="imageUrl" placeholderText="eg. https://Avenger.jpeg" labelName="Image url" />
            <AddFilmInput type="text" name="trailerUrl" placeholderText="eg. https://youtu.be/Avenger-trailer" labelName="Trailer url" />
            <AddFilmInput type="text" name="year" placeholderText="eg. 2019" labelName="Year" />
            <AddFilmInput type="text" name="genre" placeholderText="eg. Actions" labelName="Genre" />
            <AddFilmInput type="text" name="director" placeholderText="eg. Anthony Russo" labelName="Director" />
            <AddFilmInput type="text" name="producer" placeholderText="eg. Kevin Feige" labelName="Producer" />
            <AddFilmInput type="text" name="distributor" placeholderText="eg. Walt Disney" labelName="Distributor" />
            <AddFilmInput component="textarea" type="text" name="story" placeholderText="Short film description" labelName="Story" />
            <CastForm />
            <button className="add-film-content-form-button" type="submit" disabled={isLoading}>
              {isLoading && <Loader height="30" width="30" />}
              Add Film
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default AddFilmPage;
