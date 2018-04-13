import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import styled from 'styled-components';

class GroupCard extends Component {
  render() {
    return (
      <CardComponent>
        <Card>
          <Card.Content>
            <Card.Header>
              <CardTitle>
              { this.props.title }
              </CardTitle>
            </Card.Header>
            <Card.Description>
              <CardBody>
                { this.props.description}
              </CardBody>
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
  max-width: 100%;
  display: inline-flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  width: 290px;
  min-height: 0;
  background: #fff;
  padding: 10px;
  line-height: 20px;
  margin-left: 10px
  border: none;
  box-shadow: 0 1px 3px 0 black;

`
const CardTitle = styled.div`
  border-bottom: 1px solid black;
  margin-bottom: 20px;
  padding-bottom: 5px;
`

const CardBody = styled.div`
  padding-bottom: 5px;
  padding-top:5px;
  color: grey;
  margin-bottom: 15px;
`

export default GroupCard;



