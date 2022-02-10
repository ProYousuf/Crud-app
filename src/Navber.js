import React from 'react';
import {Container, Nav, Navbar, navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom';
function Navber(props) {
    return (
    <div>
        <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
       <Link to="/"> <Nav.Link href="#home">Home</Nav.Link> </Link> 
        <Link to="Form" > <Nav.Link href="#link">Add</Nav.Link> </Link>
        {/* <Link to="Edit" > <Nav.Link href="#link">EDIT</Nav.Link> </Link> */}
     </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

    </div>
    );
}

export default Navber;