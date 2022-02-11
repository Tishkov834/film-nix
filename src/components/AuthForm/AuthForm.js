import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

function AuthForm({
  heading, children, text, textLink, link,
}) {
  return (
    <div className="auth-form">
      <h1 className="auth-form-heading">{heading}</h1>
      <form className="auth-form-content">{children}</form>
      <div className="auth-form-redirect">
        <p className="auth-form-redirect-text">{text}</p>
        <a className="auth-form-redirect-link" href={link}>{textLink}</a>
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
};

AuthForm.defaultProps = {
  heading: '',
  text: '',
  textLink: '',
  link: '',
  children: '',
};

export default AuthForm;
