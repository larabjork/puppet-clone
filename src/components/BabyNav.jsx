import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';

function BabyNav() {
  const linkStyles = {
    paddingTop: '25px',
    paddingRight: '15px'
  };
  const babyStylez = {
    height: '72px',
    fontSize: '13px',
    paddingRight: '70px'
  };
  return (
    <div style={babyStylez}>
      <Navbar expand="lg">
         <Nav className="ml-auto">
          <Nav.Link href="#home" style={linkStyles}>Puppet Forge</Nav.Link>
          <Nav.Link href="#home" style={linkStyles}>Get Support</Nav.Link>
          <Nav.Link href="#home" style={linkStyles}>Partners</Nav.Link>
          <Nav.Link href="#home" style={linkStyles}>Contact Sales</Nav.Link>
          <Nav.Link href="#home"><img src='/search.svg' /></Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default BabyNav;
