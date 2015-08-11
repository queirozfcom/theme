import React from 'react';
import { Navigation } from 'react-router';
import Style from './Header.less'; // eslint-disable-line
import {
  Navbar, Nav, NavItem
} from 'react-bootstrap';

let Header = React.createClass({
  mixins: [ Navigation ],
  render() {
    return (
      <Navbar staticTop="true" fluid="true" brand="FERA fashion" className="navbar" toggleNavKey={0}>
        <Nav right eventKey={0}> {/* This is the eventKey referenced */}
          <NavItem eventKey='1' onClick={() => this.transitionTo('home')}>home</NavItem>
          <NavItem eventKey='2' onClick={() => this.transitionTo('blusas')}>blusas</NavItem>
          <NavItem eventKey='3' onClick={() => this.transitionTo('regatas')}>regatas</NavItem>
          <NavItem eventKey='4' onClick={() => this.transitionTo('shorts')}>shorts</NavItem>
          <NavItem eventKey='5' onClick={() => this.transitionTo('bodys')}>bodys</NavItem>
        </Nav>
      </Navbar>
    );
  }
});

export default Header;
