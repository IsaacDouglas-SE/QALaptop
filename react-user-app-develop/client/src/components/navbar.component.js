import React from 'react';
import {Navbar, Nav, NavDropdown, NavItem } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';

export const NavBar = (props) => {
    return (
         <Navbar bg="light" variant="light" expand="lg">
                <Navbar.Brand href="http://localhost:3000"></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="http://localhost:3000"></Nav.Link>
                        <Nav.Link href="http://localhost:3000">Home</Nav.Link>
                        <Nav.Link href="http://localhost:3000/create-user">Create User</Nav.Link>
                        <Nav.Link href="http://localhost:3000/login">Login</Nav.Link>
                    </Nav>
                    <NavItem >
                    </NavItem>
                </Navbar.Collapse>
            </Navbar>

    );
};
