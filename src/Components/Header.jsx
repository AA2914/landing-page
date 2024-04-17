import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <>
  
  <Navbar collapseOnSelect expand="lg"  style={{backgroundColor:' rgb(190, 75, 137)'}}>
      <Container>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">Flowers</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing" id='center' className='fw-bolder'>BLOOM</Nav.Link>
            <Nav.Link href="#pricing">Gallary</Nav.Link>
            <Nav.Link href="#pricing">Whatsapp</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
          </Nav>         
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>
  )
}

export default Header