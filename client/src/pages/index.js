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
                            <Nav.Link eventKey="1">How It Works</Nav.Link>
                            <Nav.Link eventKey="2">Security</Nav.Link>
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
                    <Container>
                        <Row className="pt-5 mt-2">
                            <h1 className="mx-auto pt-6 mt-5" style={{ fontWeight: 'bold', fontSize: 62, color: '#228b22' }}> Leader in Security. </h1>
                            <p className="mx-auto" style={{ fontSize: 20, fontStyle: 'Avenir', color: '#2f4f4f', textAlign: "center" }}> As a password manager, our first priority is safeguarding your data. We’ve built madPass so that we never have the key to your account.
</p>
                        </Row>
                    </Container>

                    <Container className="px-5">
                        <Row className="text-right pt-6 mt-5">
                            <Col>
                                <img
                                    alt=""
                                    src={require("./Images/icon1.svg")}
                                    width="200"
                                    height="200"
                                    className="d-inline-block align-top"
                                />
                            </Col>
                            <Col>
                                <h1 style={{ fontWeight: 'bold', color: '#2f4f4f' }}>Absolute Protection.</h1>
                                <p style={{ color: '#2f4f4f' }}>The information stored in your vault is kept secret, even from madPass. Through local encryption we assure you, your information is scure and protected. Your master password, and the keys used to encrypt and decrypt the information, are inaccessible to anyone but you, the user.</p>
                            </Col>
                        </Row>
                        <Row className="text-left pt-6 mt-5">
                            <Col>
                                <h1 style={{ fontWeight: 'bold', color: '#2f4f4f' }}>Two-Factor Authentication.</h1>
                                <p style={{ color: '#2f4f4f' }}>Two-factor authentication (sometimes referred to as multifactor or 2FA) adds extra security to your madPass account by requiring a second login step before authorizing access to your vault.</p>
                            </Col>
                            <Col>
                                <img
                                    alt=""
                                    src={require("./Images/icon2.svg")}
                                    width="200"
                                    height="200"
                                    className="d-inline-block align-top"
                                />


                            </Col>
                        </Row>
                        <Row>
                            <Col className="text-center pt-6 mt-5">

                                <Link to="/login">
                                    <Button className="ml-4" variant="outline-success" size="lg" eventKey="3">Get madPass Free</Button>
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