import PropTypes from 'prop-types';
import { ErrorMessage, Field } from 'formik';
import './styles.scss';

function ModalInput({
  type, name, placeholderText, labelName, onButtonClick, buttonIcon, isButtonShown,
}) {
  return (
    <div className="modal-field">
      <div className="modal-field-input">
        <div className="modal-field-input-text">
          <label htmlFor={type} className="modal-field-input-text-label">{labelName}</label>
          <Field className="modal-field-input-text-field" type={type} name={name} placeholder={placeholderText} />
        </div>
        {isButtonShown && (
        <button className="modal-field-input-del-btn" type="button" onClick={onButtonClick}>
          <img className="modal-field-input-del-btn-image" src={buttonIcon} alt="close" />
        </button>
        )}
      </div>
      <ErrorMessage className="error" name={name} component="div" />
    </div>
  );
}

ModalInput.propTypes = {
  placeholderText: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  labelName: PropTypes.string,
  onButtonClick: PropTypes.func,
  buttonIcon: PropTypes.string,
  isButtonShown: PropTypes.bool,
};

ModalInput.defaultProps = {
  placeholderText: '',
  name: '',
  type: '',
  labelName: '',
  onButtonClick: () => {},
  buttonIcon: '',
  isButtonShown: false,
};

export default ModalInput;
