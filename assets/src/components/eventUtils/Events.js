import React, { Component } from 'react';
import styled from 'styled-components';
import { Button, Icon } from 'semantic-ui-react';
import { Route, Link } from 'react-router-dom';


import EventCard from './EventCard';
import EventForm from './EventForm';
import NewEventButton from './NewEventButton';


class Events extends Component {
  constructor() {
    super();
    
    this.state = { 
          title: '',
          dateAndTime:'',
          description: '',
          events: [{
            title: 'Riverside High School Drama Club',
            dateAndTime:'December 25, 2050',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
          },
          {
            title: 'Firefly Music Festival',
            dateAndTime:'June 28, 2018',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
          },
          {
            title: 'Imperial Stormtrooper Graduation',
            dateAndTime:'A long time ago',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
          },
          {
            title: 'E3',
            dateAndTime:'June 7th -12th, 2018',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
          },
        ]
        }
  }

  render() {
    return(
    <div> 
        <PrettyCards> 
          {this.state.events.map(newCard => {  //this is going to display new events that are pushed into state
            return  <EventCard title={newCard.title} dateAndTime={newCard.dateAndTime} description={newCard.description}/>
          })}
        </PrettyCards>
        <NewEventButton />        
      </div>  
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

