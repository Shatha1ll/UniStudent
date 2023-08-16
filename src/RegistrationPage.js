import React from 'react';
import { Container } from 'react-bootstrap';
import RegistrationForm from './RegistrationForm'

const RegistrationPage = () => {
  return (
    <Container>
      <h1>Registration</h1>
      <RegistrationForm />
    </Container>
  );
};

export default RegistrationPage;
