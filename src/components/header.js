import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

const Header = () => (<Navbar fixedTop className="bg-k-blue">
  <Navbar.Header>
    <Navbar.Brand>
      <a href="/" className="text-uppercase text-black Montserrat fs-20">State of matter</a>
    </Navbar.Brand>
    <Navbar.Toggle/>
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav>
      <NavItem eventKey={1} href="/add" className="text-black text-uppercase Merriweather">Add</NavItem>
      <NavItem eventKey={2} href="/listing" className="text-black text-uppercase Merriweather">listing</NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>);

export default Header;
