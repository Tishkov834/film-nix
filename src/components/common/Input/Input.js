import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

function Input({
  type, value, onChange, placeholderText,
}) {
  return (
    <input className="input" type={type} value={value} onChange={onChange} placeholder={placeholderText} />
  );
}

Input.propTypes = {
  placeholderText: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  placeholderText: '',
  type: '',
  value: '',
  onChange: () => {},
};

export default Input;
