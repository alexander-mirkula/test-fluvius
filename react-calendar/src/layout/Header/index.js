import React, { Component } from 'react';
import { Container, Navbar } from 'reactstrap';

class Header extends Component {
  render() {
    return (
      <Navbar color="light" light expand="md">
        <Container>
          <h1 className="float-left">Calendar</h1>
          <span className="float-right">Log out</span>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
