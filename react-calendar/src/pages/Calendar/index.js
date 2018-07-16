import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import getMonthDays from './modules/get_month_days';
import map from 'lodash/map';

import './Day.css';

class Calendar extends Component {
  constructor (props) {
  super(props);
  this.state = {
      monthTasks: this.getSchedule(),
    }
  }

  getSchedule = () => {
    const currentTasks = localStorage.getItem("monthTasks");

    if( !currentTasks ) {
        const newTasks = getMonthDays();

        localStorage.setItem("monthTasks", newTasks);
        return newTasks;
    }else {
        return currentTasks.split(',');
    }

  }

  openDayEvent = (day) => {
    console.log(day);
  }

  render() {
    const { monthTasks } = this.state;

    return (
      <Container>
        <Row>
          <Col className="days-holder" sm={{ size: 6, offset: 3 }}>
            {map(monthTasks, (name, key) => (
              <Button onClick={() => this.openDayEvent(name)} className={`day ${(key%7 === 0)? 'row-start': ''}`} color="primary" key={name}>
                {name}
              </Button>
            ))}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Calendar;
