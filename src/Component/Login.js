import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import axios from 'axios';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email || !password) {
      setErrorMessage('Please enter your email and password');
      return;
    }
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/loginPage/', { email, password });
      if (response.data.success) {
        localStorage.setItem('student', JSON.stringify(response.data.student));
        window.location.href = `/dashboard`;
      } else {
        setErrorMessage('Invalid email or password');
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };
    return (
      <Container>
        <Row className="justify-content-md-center mb-3">
        <Col md={6}>
          <h1 className="text-center mb-4">Login Form</h1>
      <Form onSubmit={handleSubmit}>

        <Form.Group controlId="formBasicEmail" className="mb-3">
          <FloatingLabel label="Email address"> 
          <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} />
          </FloatingLabel>
        </Form.Group>
  

        <Form.Group controlId="formBasicPassword" className="mb-3">
          <FloatingLabel label="Password">
          <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={(event) => setPassword(event.target.value)} />
          </FloatingLabel>
        </Form.Group>
        <Button variant="primary" type="submit">
          login
        </Button>
        {errorMessage && <p>{errorMessage}</p>}

      </Form>
      </Col>
      </Row>
    </Container>
    );
  }

export default Login;
