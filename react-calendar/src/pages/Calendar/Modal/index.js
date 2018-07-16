import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

class Modal extends Component {
  constructor (props) {
  super(props);
  this.state = {
      isOpened: false,
    }
  }

  render() {
    const { monthTasks } = this.state;

    return (
      <div>
      </div>
    );
  }
}

export default Calendar;
