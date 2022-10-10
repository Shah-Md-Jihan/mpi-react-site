import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';



const Header = () => {

    return (
        <nav>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>
                        <Link className='text-decoration-none text-white' to="/">
                            React-Bootstrap
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link>
                                <Link className='text-decoration-none text-white' to="/academic">Academic</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link className='text-decoration-none text-white' to="/teachers">Teachers Info</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link className='text-decoration-none text-white' to="/students">Students Info</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link className='text-decoration-none text-white' to="/notice">Notice</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link className='text-decoration-none text-white' to="/elearning">E-Learning</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link className='text-decoration-none text-white' to="/gallery">Gallery</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link className='text-decoration-none text-white' to="/about">About</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link className='text-decoration-none text-white' to="/contact">Contact</Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </nav>
    );
};

export default Header;