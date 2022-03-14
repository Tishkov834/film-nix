import PropTypes from 'prop-types';
import { ErrorMessage, Field } from 'formik';
import './styles.scss';

function AddFilmInput({
  type,
  name,
  placeholderText,
  labelName,
  onButtonClick,
  buttonIcon,
  isButtonShown,
  component,
}) {
  return (
    <div className="field">
      <div className="field-input">
        <div className="field-input-text">
          <label htmlFor={type} className="field-input-text-label">{labelName}</label>
          <Field className="field-input-text-field" type={type} name={name} placeholder={placeholderText} component={component} />
        </div>
        {isButtonShown && (
        <button className="field-input-del-btn" type="button" onClick={onButtonClick}>
          <img className="field-input-del-btn-image" src={buttonIcon} alt="close" />
        </button>
        )}
      </div>
      <ErrorMessage className="error" name={name} component="div" />
    </div>
  );
}

AddFilmInput.propTypes = {
  placeholderText: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  labelName: PropTypes.string,
  onButtonClick: PropTypes.func,
  buttonIcon: PropTypes.string,
  isButtonShown: PropTypes.bool,
  component: PropTypes.string,
};

AddFilmInput.defaultProps = {
  placeholderText: '',
  name: '',
  type: '',
  labelName: '',
  onButtonClick: () => {},
  buttonIcon: '',
  isButtonShown: false,
  component: 'input',
};

export default AddFilmInput;
