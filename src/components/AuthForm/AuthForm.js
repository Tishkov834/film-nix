import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './styles.scss';

function AuthForm({
  heading, children, text, textLink, link, onSubmit,
}) {
  return (
    <div className="auth-form">
      <h1 className="auth-form-heading">{heading}</h1>
      <form className="auth-form-content" onSubmit={onSubmit}>{children}</form>
      <div className="auth-form-redirect">
        <p className="auth-form-redirect-text">{text}</p>
        <Link className="auth-form-redirect-link" to={link}>{textLink}</Link>
      </div>
    </div>
  );
}

AuthForm.propTypes = {
  heading: PropTypes.string,
  text: PropTypes.string,
  textLink: PropTypes.string,
  link: PropTypes.string,
  children: PropTypes.element,
  onSubmit: PropTypes.func,
};

AuthForm.defaultProps = {
  heading: '',
  text: '',
  textLink: '',
  link: '',
  children: '',
  onSubmit: () => {},
};

export default AuthForm;
