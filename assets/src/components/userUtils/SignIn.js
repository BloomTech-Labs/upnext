import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import styled from 'styled-components';
import axios from 'axios';
import cookie from 'react-cookies';

class EventForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isAuthorized: false
    }
  }
  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  login = (user) => {
    console.log(user);
    axios.post('http://localhost:1337/login', user, {
      headers: {
          'Content-Type': 'application/json',
      },
      withCredentials: true
  }).then(resp => {
    console.log(cookie.loadAll())
    console.log(resp)
  })
  .catch(err => console.log(err))
  }



  handleSubmit = (event) => {
    event.preventDefault();
    const {email, password} = this.state;
    const user = {emailAddress: email, password };
    this.login(user);
    this.setState({ email: '', password: '' });
  }

  render() {
    return(
        <Form onSubmit={this.handleSubmit}>
        <PrettyForm>
          <Form.Field>
            <label>Email</label>
            <input 
            required='true'
            name='email'
            type='text'
            value={this.state.email}
            onChange={this.handleChange}
            placeholder='Enter your email' />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input 
            required='true'
            name='password'
            type='password'
            value={this.state.password}
            onChange={this.handleChange}
            placeholder='Enter your password' />
          </Form.Field>
          <Form.Button onSubmit={this.handleSubmit}>Submit</Form.Button>
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

export default EventForm;