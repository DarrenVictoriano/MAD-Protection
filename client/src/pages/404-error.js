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

class PageNotFound extends React.Component {

    render() {
        return (

            <div>
                <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
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
                </Navbar>

                <Banner
                    bgImage={require("./Images/bg/blue-dude-head.png")}
                    addClass="text-center mt-5"
                >
                    <Container className="pt-5">
                        <Row className="pt-5 mt-5">
                            <Col>
                                <h1 className="mx-auto pt-5 mt-5">
                                    404 Not Found
                                </h1>
                            </Col>

                        </Row>
                    </Container>
                </Banner>


            </div>

        );
    }

}

export default PageNotFound;