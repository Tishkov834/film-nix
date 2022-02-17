import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../../components/AuthForm';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';
import { HOME_PAGE, REGISTRATION } from '../../constants/routes';
import { login } from '../../api/users';
import { setUser } from '../../store/authorization/authReducer';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    setIsLoading(true);

    login({
      email,
      password,
    })
      .then(({ data }) => {
        const { accessToken, user } = data;
        dispatch(setUser({ token: accessToken, user }));
        navigate(HOME_PAGE);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <AuthForm heading="Login" text="Don't have an account?" textLink="Sing up here" link={REGISTRATION} onSubmit={handleLogin}>
      <Input
        placeholderText="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        placeholderText="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type="submit" isDisabled={isLoading}>Login</Button>
    </AuthForm>
  );
}

export default LoginPage;
