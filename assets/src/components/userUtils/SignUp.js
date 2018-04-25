import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import styled from 'styled-components';
import axios from 'axios';

class SignUpForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      fullName: '',
      emailAddress: '',
      password: '',
      confirmPassword: '',
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { fullName, emailAddress, password, confirmPassword} = this.state;
    const newUser = {fullName, emailAddress, password, isAdmin: false};
    this.setState({ fullName: '', emailAddress: '', password: '', confirmPassword: ''});
    this.signUp(newUser);
  }

  signUp = (user) => {
    axios.post('http://localhost:1337/signup', user, {
      headers: {
          'Content-Type': 'application/json',
      }
    })
    .then(resp => console.log(resp))
    .catch(err => console.log(err))
  }

  render() {
    return(
        <Form onSubmit={this.handleSubmit}>
        <PrettyForm>
        <Form.Field required={true}>'
            <label>Full Name</label>
            <input 
            required={true}
            name='fullName'
            type='text'
            value={this.state.fullName}
            onChange={this.handleChange}
            placeholder='fullName' />
          </Form.Field>

          <Form.Field required={true}>'
            <label>Email Address</label>
            <input 
            required={true}
            name='emailAddress'
            type='text'
            value={this.state.emailAddress}
            onChange={this.handleChange}
            placeholder='Email' />
          </Form.Field>

          <Form.Field required={true}>
            <label>Password</label>
            <input 
            required={true}
            name='password'
            type='password'
            value={this.state.password}
            onChange={this.handleChange}
            placeholder='Password' />
          </Form.Field>
          
          <Form.Field required={true}>
            <label> Confirm Password </label>
            <input 
            required={true}
            name='confirmPassword'
            type='password'
            value={this.state.passwordConfirmation}
            onChange={this.handleChange}
            placeholder='Confirm password' />
          </Form.Field>
         
          <Form.Button type='submit'>Submit</Form.Button>
          </PrettyForm>
        </Form>
   
    )
  }
}

const PrettyForm = styled.div`
  display: block;
  justify-content: center;
  padding: 20px;
  margin-top: 60px;
`

export default SignUpForm;