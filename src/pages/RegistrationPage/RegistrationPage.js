import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../../components/AuthForm';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';
import { register } from '../../api/users';
import { setUser } from '../../store/authorization/authReducer';
import { HOME_PAGE } from '../../constants/routes';

function RegistrationPage() {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();

    setIsLoading(true);

    register({
      username,
      name,
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
    <AuthForm heading="Registration" text="Already have an account?" textLink="Login here" onSubmit={handleRegister}>
      <Input
        placeholderText="Login"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        placeholderText="Name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
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
      <Input
        placeholderText="Repeat password"
        type="password"
        value={repeatPassword}
        onChange={(e) => setRepeatPassword(e.target.value)}
      />
      <Button type="submit" disabled={isLoading}>Registration</Button>
    </AuthForm>
  );
}

export default RegistrationPage;
