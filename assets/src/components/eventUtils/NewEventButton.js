import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';




const NewEventButton = () => {
  return (
  <EventButton>    
    <Link to ="/eventForm">
      <Button icon>
          <Icon name='add circle' />
        </Button>
    </Link>
  </EventButton>
  )
}

const EventButton = styled.div`
  display: block;
  justify-content: right;
  margin-left: 40px;
`

export default NewEventButton;