import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';



const Header = () => {

    return (
        <nav>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
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
                                <NavLink style={({ isActive }) => {
                                    return {
                                        color: isActive ? "red" : "#fff",
                                    };
                                }} className='text-decoration-none' to="/academic">Academic</NavLink>
                            </Nav.Link>
                            <Nav.Link>
                                <NavLink style={({ isActive }) => {
                                    return {
                                        color: isActive ? "red" : "#fff",
                                    };
                                }} className='text-decoration-none' to="/teachers">Teachers Info</NavLink>
                            </Nav.Link>
                            <Nav.Link>
                                <NavLink style={({ isActive }) => {
                                    return {
                                        color: isActive ? "red" : "#fff",
                                    };
                                }} className='text-decoration-none' to="/students">Students Info</NavLink>
                            </Nav.Link>
                            <Nav.Link>
                                <NavLink style={({ isActive }) => {
                                    return {
                                        color: isActive ? "red" : "#fff",
                                    };
                                }} className='text-decoration-none' to="/notice">Notice</NavLink>
                            </Nav.Link>
                            <Nav.Link>
                                <NavLink style={({ isActive }) => {
                                    return {
                                        color: isActive ? "red" : "#fff",
                                    };
                                }} className='text-decoration-none' to="/elearning">E-Learning</NavLink>
                            </Nav.Link>
                            <Nav.Link>
                                <NavLink style={({ isActive }) => {
                                    return {
                                        color: isActive ? "red" : "#fff",
                                    };
                                }} className='text-decoration-none' to="/gallery">Gallery</NavLink>
                            </Nav.Link>
                            <Nav.Link>
                                <NavLink style={({ isActive }) => {
                                    return {
                                        color: isActive ? "red" : "#fff",
                                    };
                                }} className='text-decoration-none' to="/about">About</NavLink>
                            </Nav.Link>
                            <Nav.Link>
                                <NavLink style={({ isActive }) => {
                                    return {
                                        color: isActive ? "red" : "#fff",
                                    };
                                }} className='text-decoration-none' to="/contact">Contact</NavLink>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </nav >
    );
};

export default Header;