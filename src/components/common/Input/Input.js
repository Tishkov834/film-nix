import React from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage, Field } from 'formik';
import './styles.scss';

function Input({ type, name, placeholderText }) {
  return (
    <>
      <Field className="input" type={type} name={name} placeholder={placeholderText} />
      <ErrorMessage className="error" name={name} component="div" />
    </>
  );
}

Input.propTypes = {
  placeholderText: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
};

Input.defaultProps = {
  placeholderText: '',
  name: '',
  type: '',
};

export default Input;
