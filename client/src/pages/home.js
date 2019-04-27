import API from "../utils/API";
import React from "react";
import { Link } from "react-router-dom";
// Component below
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

class Home extends React.Component {

    render() {
        return (
            <div>
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
                            <InputGroup>
                                <FormControl
                                    placeholder="Search"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                />
                                <InputGroup.Append>
                                    <Button variant="outline-secondary"><i class="fas fa-search"></i></Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                
            </div>
        );
    }
}

export default Home;