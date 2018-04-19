import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import styled from 'styled-components';

class EventForm extends Component {
  render() {
    return(
  
        <Form>
        <PrettyForm>
          <Form.Field required='true'>
            <label>Event Name</label>
            <input placeholder='Event Name' />
          </Form.Field>
          <Form.Field>
            <label>Date and Time</label>
            <input placeholder='MM/DD/YYYY' />
          </Form.Field>
          <Form.Field>
            <label> Event Description </label>
            <Form.TextArea placeholder="Add some details about the event" />
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