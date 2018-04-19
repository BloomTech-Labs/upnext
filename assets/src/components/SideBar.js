import React, { Component } from 'react';
import {
  Sidebar,
  Segment,
  Button,
  Menu,
  Image,
  Icon,
  Header
} from 'semantic-ui-react';
import { Route, Link } from 'react-router-dom';
import styled from 'styled-components';

import Home from './Home';
import Events from './eventUtils/Events';
import EventForm from './eventUtils/EventForm';
import SignUp from './userUtils/SignUp';
import SignIn from './userUtils/SignIn';
import Settings from './userUtils/Settings';

class SideBar extends Component {
  // state = { visible: true };
  constructor(props) {
    super(props);
    this.state = {
      visible: true
    };
  }

  // toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { visible } = this.state;
    return (
      <div>
        {/* <Button onClick={this.toggleVisibility}>Menu</Button> */}
        <Sidebar
          as={Menu}
          width="thin"
          direction="top"
          visible={visible}
          icon="labeled"
          inverted
        >
          <Menu.Item name="home">
            <Link to="/">
              <Icon name="home" />
              Home
            </Link>
          </Menu.Item>
          <Menu.Item name="tasks">
            <Link to="/events">
              <Icon name="tasks" />
              Events
            </Link>
          </Menu.Item>
          <Menu.Item name="settings">
            <Link to="/settings">
              <Icon name="settings" />
              Settings
            </Link>
          </Menu.Item>
          <Menu.Item name="signUp">
            <Link to="/signUp">
              <Icon name="user plus" />
              Sign Up
            </Link>
          </Menu.Item>
          <Menu.Item name="signIn">
            <Link to="/signIn">
              <Icon name="sign in" />
              Sign In
            </Link>
          </Menu.Item>
        </Sidebar>
        {/* <Sidebar.Pusher basic>

            <Home />

        </Sidebar.Pusher> */}

        <Route exact path="/" component={Home} />
        <Route path="/events" component={Events} />
        <Route path="/settings" component={Settings} />
        <Route path="/eventForm" component={EventForm} />
        <Route path="/signUp" component={SignUp} />
        <Route path="/signIn" component={SignIn} />
        {/* <Route exact path="/" component={Home} /> */}
      </div>
    );
  }
}

export default SideBar;
