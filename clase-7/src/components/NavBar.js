import React, {useState, useEffect} from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Common from './Common'
import '../styles/NavBarStyles.css'

function NavBarComponent(props){
    
    const [panchita, setPanchita] = useState("ESTADO")
    const [state, setState] = useState(1)
    
    const handleClick = ()=>{
        setPanchita("CAMBIE :D")
    }


    return (
    <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home" >{panchita}</Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link href="#home">{state}</Nav.Link>
                    <Nav.Link href="#ejemplo">
                        <Common.TitleLabel text="Ejemplo" className="color-texto-nav"></Common.TitleLabel>
                        </Nav.Link>
                    <Nav.Link><button onClick={handleClick}>CLICK</button></Nav.Link>
                    </Nav>

                
            </Container>
   </Navbar>
    )
}

export default NavBarComponent;