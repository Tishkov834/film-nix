import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import './styles.scss';

function AuthForm({
  heading, children, text, textLink, link, onSubmit, initialValues, validationSchema,
}) {
  return (
    <div className="auth-form">
      <h1 className="auth-form-heading">{heading}</h1>
      <Formik onSubmit={onSubmit} initialValues={initialValues} validationSchema={validationSchema}>
        <Form className="auth-form-content">{children}</Form>
      </Formik>
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
  initialValues: PropTypes.instanceOf(Object),
  validationSchema: PropTypes.instanceOf(Object),
};

AuthForm.defaultProps = {
  heading: '',
  text: '',
  textLink: '',
  link: '',
  children: '',
  onSubmit: () => {},
  initialValues: {},
  validationSchema: {},
};

export default AuthForm;
