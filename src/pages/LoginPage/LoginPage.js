import { useState } from 'react';
import AuthForm from '../../components/AuthForm';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';
import { REGISTRATION } from '../../constants/routes';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <AuthForm heading="Login" text="Don't have an account?" textLink="Sing up here" link={REGISTRATION}>
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
      <Button type="submit">Login</Button>
    </AuthForm>
  );
}

export default LoginPage;
