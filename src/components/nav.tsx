import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import '../styles/nav.css'

export function Navigation() {
    return (<Navbar bg="light" variant="light">
        <Container>
            <Navbar.Brand className="unselectable" id="title">romir.</Navbar.Brand>
            <Nav className="ms-auto">
                {/*<Nav.Link href="projects">projects</Nav.Link>*/}
                <Nav.Link href="resume.pdf" target="_blank">resum&eacute;</Nav.Link>
                {/*<Nav.Link href="#pricing">pricing</Nav.Link>*/}
            </Nav>
        </Container>
    </Navbar>);
}