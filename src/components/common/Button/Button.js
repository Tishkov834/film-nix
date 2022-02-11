import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

function Button({ children }) {
  return (
    <button className="button">{children}</button>
  );
}

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
};

Button.defaultProps = {
  children: '',
};

export default Button;
