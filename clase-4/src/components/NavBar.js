import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Common from './Common'
import '../styles/NavBarStyles.css'

function NavBarComponent(props){

    return (
    <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home" >HOME</Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link href="#home">home</Nav.Link>
                    <Nav.Link href="#ejemplo">
                        <Common.TitleLabel text="Ejemplo" className="color-texto-nav"></Common.TitleLabel>
                        </Nav.Link>
                    </Nav>

                
            </Container>
   </Navbar>
    )
}

export default NavBarComponent;