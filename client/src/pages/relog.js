// This is the landing page
import API from "../utils/API";
import React from "react";
import { Link } from "react-router-dom"
// Components Below:
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Banner from "../components/Banner";

class Relog extends React.Component {

    render() {
        return (

            <div>
                <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
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
                </Navbar>

                <Banner
                    bgImage={require("./Images/bg/blue-dude-head.png")}
                    addClass="text-center mt-5"
                >
                    <Container className="pt-5">
                        <Row className="pt-5 mt-5">
                            <Col>
                                <h3 className="mx-auto pt-5 mt-5">
                                    You have been logged out due to inactivity.
                                </h3>
                                <h3 className="mx-auto">
                                    Please visit the Login Page to continue working with MadPass
                                </h3>
                                <Button
                                    href="/login"
                                    variant="success" >
                                    Login
                                </Button>
                            </Col>

                        </Row>
                    </Container>
                </Banner>


            </div>

        );
    }

}

export default Relog;