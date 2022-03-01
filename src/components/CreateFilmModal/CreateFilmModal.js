import { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Form, Formik } from 'formik';
import { useAlert } from 'react-alert';
import ModalInput from './ModalInput';
import CastForm from './CastForm';
import close from '../../images/icons/close-icon.svg';
import { createFilm } from '../../api/films';
import { createFilmSchema } from '../../schemas/modalSchema';
import './styles.scss';

function CreateFilmModal({ closeModal }) {
  const [isLoading, setIsLoading] = useState(false);
  const alert = useAlert();
  const userId = useSelector(({ authorization }) => authorization.user.id);

  const initialValues = {
    name: '',
    imageUrl: '',
    trailerUrl: '',
    year: '',
    genre: '',
    producer: '',
    distributor: '',
    director: '',
    cast: [],
  };

  const handleCreateFilm = (formValues) => {
    const fullFilmData = { ...formValues, userId };
    setIsLoading(true);

    createFilm(fullFilmData)
      .then(() => {
        closeModal();
        alert.show('Film was Create!');
      })
      .catch(({ message }) => alert.error(message))
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-content-head">
          <h1 className="modal-content-head-title">Add new film</h1>
          <button className="modal-content-head-close-btn" onClick={() => closeModal()}>
            <img className="modal-content-head-close-btn-image" src={close} alt="close" />
          </button>
        </div>
        <Formik onSubmit={handleCreateFilm} initialValues={initialValues} validationSchema={createFilmSchema}>
          <Form className="modal-content-form">
            <ModalInput type="text" name="name" placeholderText="eg. Avenger" labelName="Name" />
            <ModalInput type="text" name="imageUrl" placeholderText="eg. https://Avenger.jpeg" labelName="Image url" />
            <ModalInput type="text" name="trailerUrl" placeholderText="eg. https://youtu.be/Avenger-trailer" labelName="Trailer url" />
            <ModalInput type="text" name="year" placeholderText="eg. 2019" labelName="Year" />
            <ModalInput type="text" name="genre" placeholderText="eg. Actions" labelName="Genre" />
            <ModalInput type="text" name="director" placeholderText="eg. Anthony Russo" labelName="Director" />
            <ModalInput type="text" name="producer" placeholderText="eg. Kevin Feige" labelName="Producer" />
            <ModalInput type="text" name="distributor" placeholderText="eg. Walt Disney" labelName="Distributor" />
            <CastForm />
            <button className="modal-content-form-button" type="submit" disabled={isLoading}>Add Film</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

CreateFilmModal.propTypes = {
  closeModal: PropTypes.func,
};

CreateFilmModal.defaultProps = {
  closeModal: () => {},
};

export default CreateFilmModal;
