import React, { Component } from 'react';
import styled from 'styled-components';

import SideBar from './SideBar';
import GroupCard from './GroupCard';

class CardView extends Component {
  constructor() {
    super();
    
    this.state = { 
          title: '',
          dateAndTime:'',
          description: '',
          events: [{
            title: 'Riverside High School Drama Club',
            dateAndTime:'June 28 1991',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
          }]
        }
  }

  render() {
    return(
      <Wrapper> 
        <SideBar />
        {this.state.events.map(newCard => {  //this is going to display new events that are pushed into state
          return  <GroupCard title={newCard.title} dateAndTime={newCard.dateAndTime} description={newCard.description}/>
        })}
        
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  display: inline-flex;
  align-items: left;
  justify-content: center;

`

export default CardView;

