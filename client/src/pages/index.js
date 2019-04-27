// This is the landing page
import API from "../utils/API";
import React from "react";
import { Link } from "react-router-dom" // change href into links
// Components Below: 
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

class Index extends React.Component {

    render() {
        return (

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={require("./Images/madPass2.png")}
                        width="198"
                        height="40"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link eventKey="1" href="#deets">How It Works</Nav.Link>
                        <Nav.Link eventKey="2" href="#memes">Security</Nav.Link>
                        <Button className="ml-4" variant="success" eventKey="3" href="#memes">Get MAD-Protection Now</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>


        );
    }

}

export default Index;