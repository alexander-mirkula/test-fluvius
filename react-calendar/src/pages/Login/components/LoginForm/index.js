import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { FormErrors } from './components/FormErrors';

class LoginForm extends Component {

  constructor (props) {
  super(props);
  this.state = {
      email: '',
      password: '',
      formErrors: {email: '', password: ''},
      emailValid: false,
      passwordValid: false,
      formValid: false
    }
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;
    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 4;
        fieldValidationErrors.password = passwordValid ? '': ' is too short';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    passwordValid: passwordValid
                  }, this.validateForm);
  }

  handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value}, () => { this.validateField(name, value) });
  }

  onFormSubmit = (e) => {
    e.preventDefault();

    if(this.state.emailValid && this.state.passwordValid) {
      this.setState({formValid: true});

      if(this.state.email === 'test@email.com' && this.state.password === 'test') {
          sessionStorage.setItem('isLogged', true);
      }
    }else{
      this.setState({formValid: false});
    }

  }

  render() {
    return (
      <Form>
        <div className="panel panel-default">
          <FormErrors formErrors={this.state.formErrors} />
        </div>
        <FormGroup className="has-error" >
          <Label for="Email">Email</Label>
          <Input onChange={this.handleInputs} type="email" name="email" id="Email" placeholder="Email" />
        </FormGroup>
        <FormGroup>
          <Label for="Password">Password</Label>
          <Input onChange={this.handleInputs} type="password" name="password" id="Password" placeholder="password" />
        </FormGroup>
        <Button onClick={this.onFormSubmit}>Submit</Button>
      </Form>
    );
  }
}

export default LoginForm;
