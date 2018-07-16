import React, { Component } from 'react';
import Login from '../../pages/Login';
import Calendar from '../../pages/Calendar';

class Content extends Component {
  render() {
    return (
      <div>
        <Login />
        <Calendar />
      </div>
    );
  }
}

export default Content;
