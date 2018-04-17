import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import styled from 'styled-components';


class Settings extends Component {


  render() {
    return (
      <SettingsForm>
        <Form>
          <Form.Group widths='equal'>
            <Form.Input fluid label='Email' placeholder='Email' />
            <Form.Input fluid label='Phone' placeholder='Phone' />
          </Form.Group>
          <Form.Group inline>
            <label> Notification Options </label>
            <Form.Checkbox label='Emails?' />
            <Form.Checkbox label='Texts?' />
            </Form.Group>
          <Form.Field required='true'>
            <label>Old Password</label>
            <input placeholder='Old Password' />
          </Form.Field>
          <Form.Field>
            <label> New Password </label>
            <input placeholder="New Password" />
          </Form.Field>
          <Form.Field required='true'>
            <label> Confirm Password </label>
            <input placeholder="Confirm Password" />
          </Form.Field>
          <Form.Button>Save</Form.Button>
        </Form>
      </SettingsForm>
    )
  }
}

const SettingsForm = styled.div`
  margin-top: 100px;
  justify-content: center;
  display:flex;
`

export default Settings;