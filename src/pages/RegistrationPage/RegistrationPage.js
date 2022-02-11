import React from 'react';
import AuthForm from '../../components/AuthForm';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';

function RegistrationPage() {
  return (
    <AuthForm heading="Registration" text="Already have an account?" textLink="Login here">
      <Input placeholderText="Login" />
      <Input placeholderText="Name" />
      <Input placeholderText="Email" />
      <Input placeholderText="Password" />
      <Input placeholderText="Repeat password" />
      <Button>Registration</Button>
    </AuthForm>
  );
}

export default RegistrationPage;
