import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../../components/AuthForm';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import { HOME_PAGE, REGISTRATION } from '../../constants/routes';
import { login } from '../../api/users';
import { setUser } from '../../store/authorization/authReducer';
import { loginSchema } from '../../schemas/authSchema';

function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    email: '',
    password: '',
  };

  const handleLogin = (formValues) => {
    setIsLoading(true);

    login(formValues).then(({ data }) => {
      const { accessToken, user } = data;
      dispatch(setUser({ token: accessToken, user }));
      navigate(HOME_PAGE);
    })
      .finally(() => setIsLoading(false));
  };

  return (
    <AuthForm
      heading="Login"
      text="Don't have an account?"
      textLink="Sing up here"
      link={REGISTRATION}
      onSubmit={handleLogin}
      initialValues={initialValues}
      validationSchema={loginSchema}
    >
      <Input type="email" name="email" placeholderText="Email" />
      <Input type="password" name="password" placeholderText="Password" />
      <Button type="submit" isDisabled={isLoading}>Login</Button>
    </AuthForm>
  );
}

export default LoginPage;
