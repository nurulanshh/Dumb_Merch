import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

//import css modules
import cssModules from './Navbar.module.css'


function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
      <Container>
        <Navbar.Brand href="/">
            <img className={cssModules.img} src='/images/logodumbmerch.png' alt=''/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav className={cssModules.Navlink} >
            <Form className="d-flex">
                <Form.Control
                   type="search"
                   placeholder="Search"
                   className="me-2 bg-dark border-dark"
                   aria-label="Search"/>
                <Button variant="link" className={cssModules.button}>Search</Button>
            </Form>
            <Nav.Link href="/category">Category</Nav.Link>
            <Nav.Link href="/product">Product</Nav.Link>
            <Nav.Link href="/complain">Complain</Nav.Link>
            <Nav.Link href="/profile">Profile</Nav.Link>
            <Nav.Link href="/">Log out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;