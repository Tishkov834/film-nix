import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAlert } from 'react-alert';
import AuthForm from '../../components/AuthForm';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';
import { register } from '../../api/users';
import { setUser } from '../../store/authorization/authReducer';
import { HOME_PAGE, LOGIN } from '../../constants/routes';
import { registrationSchema } from '../../schemas/authSchema';

function RegistrationPage() {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const alert = useAlert();

  const initialValues = {
    username: '',
    name: '',
    email: '',
    password: '',
    repeatPassword: '',
  };

  const handleRegister = ({
    username, name, email, password,
  }) => {
    setIsLoading(true);

    register({
      username, name, email, password,
    })
      .then(({ data }) => {
        const { accessToken, user } = data;
        dispatch(setUser({ token: accessToken, user }));
        navigate(HOME_PAGE);
      })
      .catch(() => alert.error('This user already exist'))
      .finally(() => setIsLoading(false));
  };

  return (
    <AuthForm
      heading="Registration"
      text="Already have an account?"
      textLink="Login here"
      link={LOGIN}
      onSubmit={handleRegister}
      initialValues={initialValues}
      validationSchema={registrationSchema}
    >
      <Input type="text" name="username" placeholderText="Login" />
      <Input type="text" name="name" placeholderText="Name" />
      <Input type="email" name="email" placeholderText="Email" />
      <Input type="password" name="password" placeholderText="Password" />
      <Input type="password" name="repeatPassword" placeholderText="Repeat password" />
      <Button type="submit" isDisabled={isLoading}>Registration</Button>
    </AuthForm>
  );
}

export default RegistrationPage;
