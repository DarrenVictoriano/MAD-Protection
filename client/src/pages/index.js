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
                                    Can't remember all your password?
                                </h1>
                                <p className="lead"> asdkaslkd laksdjlakjd ksjdajsd</p>
                            </Col>

                        </Row>
                    </Container>
                </Banner>

                <Container>
                    <Row className="text-center">
                        <Col>
                            Left Column
                        </Col>

                        <Col>
                            Right Column
                        </Col>
                    </Row>
                </Container>

                <Banner
                    bgImage={require("./Images/bg/blue-dude-head.png")}
                    addClass="text-center mt-5"
                >
                    <Container className="pt-5">
                        <Row className="pt-5 mt-5">
                            <Col>
                                <h1 className="mx-auto pt-5 mt-5">
                                    Can't remember all your password?
                                </h1>
                                <p className="lead"> asdkaslkd laksdjlakjd ksjdajsd</p>
                            </Col>

                        </Row>
                    </Container>
                </Banner>

                <Banner
                    bgImage={require("./Images/bg/blue-dude-head.png")}
                    addClass="text-center mt-5"
                >
                    <Container className="pt-5">
                        <Row className="pt-5 mt-5">
                            <Col>
                                <h1 className="mx-auto pt-5 mt-5">
                                    Can't remember all your password?
                                </h1>
                                <p className="lead"> asdkaslkd laksdjlakjd ksjdajsd</p>
                            </Col>

                        </Row>
                    </Container>
                </Banner>

                <Banner
                    bgImage={require("./Images/bg/blue-dude-head.png")}
                    addClass="text-center mt-5"
                >
                    <Container className="pt-5">
                        <Row className="pt-5 mt-5">
                            <Col>
                                <h1 className="mx-auto pt-5 mt-5">
                                    Can't remember all your password?
                                </h1>
                                <p className="lead"> asdkaslkd laksdjlakjd ksjdajsd</p>
                            </Col>

                        </Row>
                    </Container>
                </Banner>


            </div>



        );
    }

}

export default Index;