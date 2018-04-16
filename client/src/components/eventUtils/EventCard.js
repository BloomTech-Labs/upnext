import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import styled from 'styled-components';

class EventCard extends Component {
  render() {
    return (
      <CardComponent>
          <Card>
            <Card.Content>
              <Card.Header>
              
                { this.props.title }
                
              </Card.Header>
              <Card.Description>
                
                  { this.props.description}
                
              </Card.Description>
              <Card.Meta>
                <span className='date'>
                  { this.props.dateAndTime }
                </span>
              </Card.Meta>
            </Card.Content>
          </Card>
      </CardComponent>
    )
  }   
}

  

const CardComponent = styled.div`
  padding: 10px;
`


export default EventCard;



