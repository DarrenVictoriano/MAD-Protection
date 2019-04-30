// This is the landing page
import API from "../utils/API";
import React from "react";
import { Link } from "react-router-dom" // change href into links
// Components Below: 
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./style.css"

class Login extends React.Component {

    render() {
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
                        <Nav className="ml-auto">
                            <Nav.Link eventKey="1" href="#deets">How It Works</Nav.Link>
                            <Nav.Link eventKey="2" href="#memes">Security</Nav.Link>
                            <Link to="/login">
                                <Button className="ml-4" variant="success" eventKey="3">Get madPass Free</Button>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Container>
                    <Row>
                        <Col md={5} className="mt-5">
                            <h1>Join us for free</h1>
                            <p className="lead">The madPass if forever free, promise just sign up below and see what happens.</p>
                            <Form className="mt-3">
                                <Form.Group controlId="registerEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                    <Form.Text className="text-danger">
                                        Error message here
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="registerPass">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                    <Form.Text className="text-danger">
                                        Error message here
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="registerPass2">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control type="password" placeholder="Confirm Password" />
                                    <Form.Text className="text-danger">
                                        Error message here
                                    </Form.Text>
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Sign-up
                                </Button>
                            </Form>
                        </Col>

                        <Col md={2} className="text-center mt-5 mx-5 d-none d-md-block vhr">

                        </Col>

                        <Col md={5} className="mt-5">
                            <h1>Already a member?</h1>
                            <p className="lead">Well, your a lot cooler than we thought. Login here then.</p>
                            <Form className="mt-3">
                                <Form.Group controlId="signInEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                    <Form.Text className={`text-danger ${`d-block`}`}>
                                        Incorrect Email/Password
                                </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="signInPass">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Login
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>

        );
    }
}

export default Login;