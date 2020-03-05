import React from 'react'
import {Navbar} from 'react-bootstrap'
import {Nav} from 'react-bootstrap'

const Menu = (props) =>{
    return (

      <Navbar bg="light" variant="light">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#Register">Register </Nav.Link>
      <Nav.Link href="#Search"> Search </Nav.Link>
    </Nav>
  </Navbar>
    )
}
export default Menu