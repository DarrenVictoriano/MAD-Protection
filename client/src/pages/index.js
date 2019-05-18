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
import Banner from "../components/Banner";

class Index extends React.Component {

    render() {
        return (
            <div>
                <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Link to="/">
                        <Navbar.Brand>
                            <img
                                alt=""
                                src={require("./Images/iconlogo3.png")}
                                width="175"
                                height="40"
                                className="d-inline-block align-top"
                            />
                        </Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link eventKey="1" href="#howto">How It Works</Nav.Link>
                            <Nav.Link eventKey="2" href="#secure">Security</Nav.Link>
                            <Link to="/login">
                                <Button className="ml-4" variant="success" eventKey="3">Get madPass Free</Button>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <Banner
                    bgImage={require("./Images/bg/blue-dude-head.png")}
                    addClass="text-center"
                >
                    <Container className="pt-5">
                        <Row className="pt-5 mt-5">
                            <Col>
                                <h1 className="mx-auto pt-5 mt-5">
                                    Can't remember all your passwords?
                                </h1>
                                <p className="lead"> Welcome to the ultimate password manager.</p>
                            </Col>

                        </Row>
                    </Container>
                </Banner>
                <Banner

                >
                    <Container id="howto">
                        <Row className="pt-5 mt-2">
                            <Col>

                                <h1 className="mx-auto mt-5 text-center" style={{ fontWeight: 'bold', fontSize: 62, color: '#228b22' }}> How to madPass? </h1>
                                <p className="mx-auto" style={{ fontSize: 20, fontStyle: 'Avenir', color: '#2f4f4f', textAlign: "center" }}>
                                    Start madPass-ing, in two easy steps.
                                </p>
                            </Col>
                        </Row>

                        <Row className="mt-5 pt-5">
                            <Col className="text-center">
                                <img
                                    alt=""
                                    src={require("./Images/how_to_create.png")}
                                    height="300"
                                    className="d-inline-block align-top"
                                />
                            </Col>
                            <Col className="pt-5">
                                <h1 style={{ fontWeight: 'bold', color: '#2f4f4f' }}>Create an Account.</h1>
                                <p style={{ color: '#2f4f4f' }}>
                                    Sign-up for a madPass account, its free and its the only password that you will need to remember.
                                </p>
                            </Col>
                        </Row>
                        <Row className="mt-5 pt-5">
                            <Col className="text-right pt-5">
                                <h1 style={{ fontWeight: 'bold', color: '#2f4f4f' }}>Save your passwords to your vault.</h1>
                                <p style={{ color: '#2f4f4f' }}>
                                    Simply add all your account into your vault. You vault is securely encrypted. Promise.
                                </p>
                            </Col>
                            <Col className="text-center">
                                <img
                                    alt=""
                                    src={require("./Images/how_to_add.png")}
                                    height="300"
                                    className="d-inline-block align-top"
                                />


                            </Col>
                        </Row>
                    </Container>

                    <Container id="secure" className="px-5">
                        <Row className="pt-5 mt-2 text-center">
                            <Col>
                                <h1 className="mx-auto pt-6 mt-5" style={{ fontWeight: 'bold', fontSize: 62, color: '#228b22' }}> Leader in Security. </h1>
                                <p className="mx-auto" style={{ fontSize: 20, fontStyle: 'Avenir', color: '#2f4f4f', textAlign: "center" }}>
                                    As a password manager, our first priority is safeguarding your data. We’ve built madPass so that we never have the key to your account.
                                </p>
                            </Col>
                        </Row>

                        <Row className="mt-5">
                            <Col className="text-center">
                                <img
                                    alt=""
                                    src={require("./Images/icon1.svg")}
                                    width="300"
                                    height="300"
                                    className="d-inline-block align-top"
                                />
                            </Col>
                            <Col>
                                <h1 style={{ fontWeight: 'bold', color: '#2f4f4f' }}>Absolute Protection.</h1>
                                <p style={{ color: '#2f4f4f' }}>The information stored in your vault is kept secret, even from madPass. Through local encryption we assure you, your information is secure and protected. Your master password, and the keys used to encrypt and decrypt the information, are inaccessible to anyone but you.</p>
                            </Col>
                        </Row>
                        <Row className="pt-6 mt-5 pt-5">
                            <Col className="text-right">
                                <h1 style={{ fontWeight: 'bold', color: '#2f4f4f' }}>Powerful Encryption.</h1>
                                <p style={{ color: '#2f4f4f' }}>By using an AES (Advanced Encryption System) algorithm with a 256-bit encryption key, we are able to thoroughly protect and secure user info. Using this, madPass keeps your information private, secure, and hidden (even from us).</p>
                            </Col>
                            <Col className="text-center">
                                <img
                                    alt=""
                                    src={require("./Images/icon2.svg")}
                                    width="300"
                                    height="300"
                                    className="d-inline-block align-top"
                                />


                            </Col>
                        </Row>
                        <Row>
                            <Col className="text-center pt-6 mt-5">

                                <Link to="/login">
                                    <Button className="ml-4" variant="success" size="lg" eventKey="3">Get madPass Now</Button>
                                </Link>

                            </Col>
                        </Row>
                    </Container>
                </Banner>



            </div >



        );
    }

}

export default Index;