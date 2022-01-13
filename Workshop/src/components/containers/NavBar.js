import {Navbar, Container, Nav} from "react-bootstrap"



const NavBar = ()=>{
    return(
    <Navbar bg="dark" variant="dark">
    <Container >
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="https://www.todofondos.net/wp-content/uploads/obtener-el-fondo-de-pantalla-predeterminado-de-ios-13-768x768.jpg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      React Bootstrap
      </Navbar.Brand>
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/detail">Cars</Nav.Link>
      <Nav.Link href="/store">Store</Nav.Link>
    </Container>
  </Navbar>
    )
}

export default NavBar;