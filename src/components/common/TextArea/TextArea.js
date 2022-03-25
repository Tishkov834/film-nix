import PropTypes from 'prop-types';
import { ErrorMessage, Field } from 'formik';
import './styles.scss';

function TextArea({
  type, name, placeholderText,
}) {
  return (
    <>
      <Field className="text-area" type={type} name={name} placeholder={placeholderText} component="textarea" />
      <ErrorMessage className="error" name={name} component="div" />
    </>
  );
}

TextArea.propTypes = {
  placeholderText: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
};

TextArea.defaultProps = {
  placeholderText: '',
  name: '',
  type: '',
};

export default TextArea;
