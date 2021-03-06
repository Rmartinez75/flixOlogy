//Importing scss, react and bootstrap components
import React, { useState } from 'react';
import axios from 'axios';
import {
  Button,
  Form,
  Container,
  Row,
  Col,
  Navbar,
  Nav,
} from 'react-bootstrap';
import './login-view.scss';
import { Link } from 'react-router-dom';

export function LoginView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  //Allows to login with any credentials
  const handleSubmit = (e) => {
    e.preventDefault();
    /* Send a request to the server for authentication */
    axios
      .post('https://flixology.herokuapp.com/login', {
        Username: username,
        Password: password,
      })
      .then((response) => {
        const data = response.data;
        props.onLoggedIn(data);
      })
      .catch((e) => {
        console.log('no such user');
      });
  };

  return (
    <Container>
      <br></br>
      <br></br>
      <Form>
        <h4>Already Registered?</h4>
        <h5>Please Login</h5>
        <Form.Group className='login'>
          <Row>
            <Col>
              <Form.Label className='Label'>Username:</Form.Label>
              <Form.Control
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className='Control'
                type='text'
                placeholder='Enter Username'
              />
            </Col>
            <Col>
              <Form.Label className='Label'>Password:</Form.Label>
              <Form.Control
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='Control2'
                type='password'
                placeholder='Enter Password'
              />
            </Col>
          </Row>
          <Row>
            <Col className='Button'>
              <Button type='button' variant='dark' onClick={handleSubmit}>
                Submit
              </Button>
            </Col>
          </Row>
        </Form.Group>
        <h5>Not yet registered?</h5>
        <Link to={`/register`}>
          <Button variant='dark link'>
            <h5>Register Here</h5>
          </Button>
        </Link>
      </Form>
    </Container>
  );
}
