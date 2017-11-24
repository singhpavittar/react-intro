import React from 'react';
import {Navbar} from 'react-bootstrap';

const Header = () => (<Navbar fixedTop>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="/">State of matter</a>
    </Navbar.Brand>
  </Navbar.Header>
</Navbar>);

export default Header;
