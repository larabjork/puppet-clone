import React from 'react';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';

function MainNav () {
  const navGrid = {
    display: 'grid',
    gridTemplateColumns: '1fr 800px 65px',
    borderBottom: '4px solid orange'
  };
  const dropText = {
    fontSize: '20px',
    float: 'left'
  }
  return (
    <div>
      <Navbar expand="lg" style={navGrid}>
        <img src="/puppet-logo-black.svg" width="180px" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Products & Use Cases" id="basic-nav-dropdown" style={dropText}>
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Knowledge & Services" id="basic-nav-dropdown" style={dropText}>
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Company & Community" id="basic-nav-dropdown" style={dropText}>
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Button variant="primary">Try</Button>
      </Navbar>
    </div>
  )
}

export default MainNav;
