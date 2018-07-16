import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import LoginForm from './components/LoginForm';

class Login extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col sm={{ size: 6, offset: 3 }}>
            <LoginForm />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;
