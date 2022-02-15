import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

function Button({ children, onClick, type }) {
  return (
    <button className="button" type={type} onClick={onClick}>{children}</button>
  );
}

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['submit', 'button', 'reset']),
};

Button.defaultProps = {
  children: '',
  onClick: () => {},
  type: 'button',
};

export default Button;
