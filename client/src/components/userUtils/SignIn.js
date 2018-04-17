import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import styled from 'styled-components';

class EventForm extends Component {
  render() {
    return(
  
        <Form>
        <PrettyForm>
          <Form.Field required='true'>
            <label>Email</label>
            <input placeholder='Enter your email' />
          </Form.Field>
          <Form.Field required='true'>
            <label>Password</label>
            <input placeholder='Enter your password' />
          </Form.Field>
          <Form.Button>Submit</Form.Button>
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