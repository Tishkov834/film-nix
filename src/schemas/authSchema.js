import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup.string().email().required('Email is required'),
  password: yup.string()
    .required('Password is required')
    .min(4, 'Password is too short - should be 4 chars minimum'),
});
