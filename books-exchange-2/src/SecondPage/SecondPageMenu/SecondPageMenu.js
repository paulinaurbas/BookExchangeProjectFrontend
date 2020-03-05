import React from 'react'
import {Navbar} from 'react-bootstrap'
import {Nav} from 'react-bootstrap'

const Menu = (props) =>{
    return (

      <Navbar bg="light" variant="light">
    <Nav className="mr-auto">
      <Nav.Link href="http://localhost:8080/JavaServlets-EE7/LogoutServlet"> Logout </Nav.Link>
    </Nav>
  </Navbar>
    )
}
export default Menu