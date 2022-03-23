import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

function Button({
  children, onClick, type, isDisabled, className,
}) {
  return (
    <button className={className} disabled={isDisabled} type={type} onClick={onClick}>{children}</button>
  );
}

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['submit', 'button', 'reset']),
  isDisabled: PropTypes.bool,
  className: PropTypes.string,
};

Button.defaultProps = {
  children: '',
  onClick: () => {},
  type: 'button',
  isDisabled: false,
  className: 'button',
};

export default Button;
