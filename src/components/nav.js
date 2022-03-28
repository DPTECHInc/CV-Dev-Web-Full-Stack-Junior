import React from "react";
import "../App.css";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { BsFillHouseDoorFill } from "react-icons/bs";

function NavBar() {
    return (
        <Navbar bg="light" className="navBarStyle" expand="lg">
            <Container>
                <Navbar.Brand href="#/home">
                    <BsFillHouseDoorFill />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/#experiences">Expériences</Nav.Link>
                        <Nav.Link href="/#workspace">Espace de travail</Nav.Link>
                        <NavDropdown title="Compétences" href="/#competences" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/#competences/1">Front-end</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/#competences/2">Back-End</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/#competences/3">Mobile</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default NavBar;
