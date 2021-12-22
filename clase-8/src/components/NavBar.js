import React, {useState, useEffect} from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Common from './Common'
import '../styles/NavBarStyles.css'
import {NavLink} from 'react-router-dom'

function NavBarComponent(props){
    
    const [panchita, setPanchita] = useState("INICIO")
    const [state, setState] = useState("Star Wars")
    
    const handleClick = ()=>{
        setPanchita("CAMBIE :D")
    }


    return (
    <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home" >{panchita}</Navbar.Brand>
                    <Nav>
                    <Nav.Link href="#home"><NavLink to="/category/Star">{state}</NavLink></Nav.Link>
                    <Nav.Link href="#ejemplo">
                        <Common.TitleLabel text="Rick & Morty" className="color-texto-nav"></Common.TitleLabel>
                    </Nav.Link>
                    <Nav.Link><NavLink to={"/category/disney"}><p>Disney</p></NavLink></Nav.Link>
                    </Nav>
            </Container>
    </Navbar>
    )
}

export default NavBarComponent;