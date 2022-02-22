import PropTypes from 'prop-types';
import { Form, Formik } from 'formik';
import ModalInput from './ModalInput';
import close from '../../images/icons/close-icon.svg';
import './styles.scss';

function CreateFilmModal({
  active,
  closeModal,
  onSubmit,
  initialValues,
  validationSchema,
}) {
  return (
    <div className={active ? 'modal' : 'modal inactive'}>
      <div className="modal-content">
        <div className="modal-content-head">
          <h1 className="modal-content-head-title">Add new film</h1>
          <button className="modal-content-head-close-btn" onClick={() => closeModal(false)}>
            <img className="modal-content-head-close-btn-image" src={close} alt="close" />
          </button>
        </div>
        <Formik onSubmit={onSubmit} initialValues={initialValues} validationSchema={validationSchema}>
          <Form className="modal-content-form">
            <ModalInput type="text" name="name" placeholderText="eg. Avenger" labelName="Name" />
            <ModalInput type="text" name="imageUrl" placeholderText="eg. https://Avenger.jpeg" labelName="Image url" />
            <ModalInput type="text" name="trailerUrl" placeholderText="eg. https://youtu.be/Avenger-trailer" labelName="Trailer url" />
            <ModalInput type="text" name="year" placeholderText="eg. 2019" labelName="Year" />
            <ModalInput type="text" name="genre" placeholderText="eg. Actions" labelName="Genre" />
            <ModalInput type="text" name="director" placeholderText="eg. Anthony Russo" labelName="Director" />
            <ModalInput type="text" name="producer" placeholderText="eg. Kevin Feige" labelName="Producer" />
            <ModalInput type="text" name="distributor" placeholderText="eg. Walt Disney" labelName="Distributor" />
            <button className="modal-content-form-button" type="submit">Add Film</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

CreateFilmModal.propTypes = {
  active: PropTypes.bool,
  closeModal: PropTypes.func,
  onSubmit: PropTypes.func,
  initialValues: PropTypes.instanceOf(Object),
  validationSchema: PropTypes.instanceOf(Object),
};

CreateFilmModal.defaultProps = {
  active: false,
  closeModal: () => {},
  onSubmit: () => {},
  initialValues: {},
  validationSchema: {},
};

export default CreateFilmModal;
