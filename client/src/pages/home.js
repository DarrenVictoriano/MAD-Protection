import API from "../utils/API";
import React from "react";
import { Link } from "react-router-dom";
// Component below
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Home extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            open: false
        };
    }

    render() {
        const { open } = this.state;

        return (
            <div>
                <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Link to="/">
                        <Navbar.Brand>
                            <img
                                alt=""
                                src={require("./Images/madPass2.png")}
                                width="198"
                                height="40"
                                className="d-inline-block align-top"
                            />
                        </Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-3">
                            <Nav.Link><i class="fas fa-lock"></i> Passwords</Nav.Link>
                            <Nav.Link><i class="fas fa-sticky-note"></i> Notes</Nav.Link>
                            <Nav.Link><i class="fas fa-cog"></i> Account Settings</Nav.Link>
                        </Nav>
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
                <Container fluid={true}>
                    <Row>
                        <Col>
                            <h1>small display</h1>
                        </Col>
                        <Col>
                            <h1>More info when clicked</h1>
                        </Col>
                    </Row>
                </Container>


            </div>
        );
    }
}

export default Home;