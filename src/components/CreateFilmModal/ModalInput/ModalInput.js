import PropTypes from 'prop-types';
import { ErrorMessage, Field } from 'formik';
import './styles.scss';

function ModalInput({
  type, name, placeholderText, labelName,
}) {
  return (
    <div className="modal-input">
      <label htmlFor={type} className="modal-input-Label">{labelName}</label>
      <Field className="modal-input-field" type={type} name={name} placeholder={placeholderText} />
      <ErrorMessage className="error" name={name} component="div" />
    </div>
  );
}

ModalInput.propTypes = {
  placeholderText: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  labelName: PropTypes.string,
};

ModalInput.defaultProps = {
  placeholderText: '',
  name: '',
  type: '',
  labelName: '',
};

export default ModalInput;
