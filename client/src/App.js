import React, { Component } from 'react';
import './App.css';

import CardView from './components/CardView';



class App extends Component {
  render() {
    return (
      <div className="App">
          <h1> ADMIN EVENT LIST </h1>
          <CardView />
         
      </div>
    );
  }
}

export default App;


// ****PERSONAL NOTES******

//Title
//Date/Time
//Group Name
//Schedule

//what do i need to do first? get a card component to show up (DONE)
//what next- update that card component's state in order to make it reactive (DO NOW)
//then? get those cards to dsiplay/delete when needed (STILL NEED TO BE DONE)
//Need to implement breadcrumbs too (semantic-ui has a good solution for this)