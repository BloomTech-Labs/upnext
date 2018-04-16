import React, { Component } from 'react';
import styled from 'styled-components';


import EventCard from './EventCard';


class Events extends Component {
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
          },
          {
            title: 'Riverside High School Drama Club',
            dateAndTime:'June 28 1991',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
          },
          {
            title: 'Riverside High School Drama Club',
            dateAndTime:'June 28 1991',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
          },
          {
            title: 'Riverside High School Drama Club',
            dateAndTime:'June 28 1991',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
          },
        ]
        }
  }

  render() {
    return(
      <PrettyCards> 
        {this.state.events.map(newCard => {  //this is going to display new events that are pushed into state
          return  <EventCard title={newCard.title} dateAndTime={newCard.dateAndTime} description={newCard.description}/>
        })}

      </PrettyCards>
    )
  }
}

const PrettyCards = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 100px;
  /* margin-left: px; */
`



export default Events;

