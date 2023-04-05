import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import '../styles/nav.css'

export function Navigation() {
    return (<Navbar bg="light" variant="light">
        <Container>
            <Navbar.Brand href="#home" id="title">romir.</Navbar.Brand>
            <Nav className="ms-auto">
                <Nav.Link href="projects">projects</Nav.Link>
                <Nav.Link href="resume">resum&eacute;</Nav.Link>
                {/*<Nav.Link href="#pricing">pricing</Nav.Link>*/}
            </Nav>
        </Container>
    </Navbar>);
}