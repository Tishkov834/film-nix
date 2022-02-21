import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup.string().email().required('Email is required'),
  password: yup.string()
    .required('Password is required')
    .min(4, 'Password is too short - should be 4 chars minimum'),
});

export const registrationSchema = yup.object().shape({
  username: yup.string().required('Login is required'),
  name: yup.string().required('Name is required'),
  email: yup.string().email().required('Email is required'),
  password: yup.string()
    .required('Password is required')
    .min(4, 'Password is too short - should be 4 chars minimum'),
  repeatPassword: yup.string().oneOf([yup.ref('password')], 'Passwords do not match').required('Repeat password is required'),
});
