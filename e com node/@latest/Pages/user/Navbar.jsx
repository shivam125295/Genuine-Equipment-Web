import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/ge logo.png'

function Navbars() {
  return (
    <>
     
   
      <Navbar bg="info" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/"><img className='h-25 w-20 mix-blend-color rounded' src={logo} alt="" srcset="" /></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="productmenu">Products</Nav.Link>


            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <br />
      
    </>
  );
}

export default Navbars;