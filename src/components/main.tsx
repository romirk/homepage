import React from "react";
import {Container} from "react-bootstrap";
import '../styles/main.css'

function Jumbotron() {
    return <Container>
        <h1 className="typewriter">Coming soon.</h1>
    </Container>;
}

export function Main() {
    return <div id="main" className="m-auto p-5"><Jumbotron/></div>;

}