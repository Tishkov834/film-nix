import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

function Input({ placeholderText }) {
  return (
    <input className="input" type="text" placeholder={placeholderText} />
  );
}

Input.propTypes = {
  placeholderText: PropTypes.string,
};

Input.defaultProps = {
  placeholderText: '',
};

export default Input;
