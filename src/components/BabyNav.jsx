import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';

function BabyNav() {
  const linkStyles = {
    textDecoration: 'none',
    listStyleType: 'none',
    float: 'left'
  };
  const babyStylez = {
    height: '72px'
  };
  return (
    <div style={babyStylez}>
      <Navbar bg="light" expand="lg">
         <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#home">Puppet Forge</Nav.Link>
          <Nav.Link href="#home">Get Support</Nav.Link>
          <Nav.Link href="#home">Partners</Nav.Link>
          <Nav.Link href="#home">Contact Sales</Nav.Link>
          <Nav.Link href="#home"><img src='/search.svg' /></Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default BabyNav;
