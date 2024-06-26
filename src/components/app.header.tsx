'use client'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Link from 'next/link'

function Header() {
  return (
    <Navbar sticky="top" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">One Billion</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link href="/" className='nav-link'>Home</Link>
            <Link href="/about" className='nav-link'>About</Link>
            <Link href="/theo-doi-suc-khoe" className='nav-link'>Theo dõi sức khỏe</Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Theo dõi sức khỏe</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Bài tập cải thiện sức khỏe
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Booking</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;