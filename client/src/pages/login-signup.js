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

    constructor(props) {
        super(props);

        this.state = {
            loginUser: "",
            loginPass: "",
            hideLoginError: "d-none",
            regEmail: "",
            hideEmailError: "d-none",
            regPass: "",
            regConfirmPass: "",
            hideRegPassError: "d-none",
        }
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleLogin = event => {
        let loginCredential = {
            email: this.state.loginUser,
            Password: this.state.loginPass
        }

        console.log(loginCredential);

        API.loginUser(loginCredential)
            .then(userInfoDB => {
                console.log(userInfoDB.data);
                console.log(userInfoDB.data.token);
                console.log(userInfoDB.data.data._id);
                console.log(userInfoDB.data.data.accountInfo);

                this.props.setToken(userInfoDB.data.token);
                this.props.setUserID(userInfoDB.data.data._id);

                this.props.history.push("/home");

                console.log("this is the userID from App State ", this.props.getUserID);

            }).catch(err => {
                this.setState({
                    hideLoginError: "d-block",
                    loginUser: "",
                    loginPass: ""
                });
                console.log(err);
            });

    }

    handleRegister = event => {
        event.preventDefault();
        // show error if password does not match
        if (this.state.regPass !== this.state.regConfirmPass) {
            this.setState({
                hideRegPassError: "d-block"
            });
        } else {
            // create new user if password match

        }

    }

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
                <Container className="mb-5 pb-5 body-min">
                    <Row>
                        <Col md={5} className="mt-5">
                            <h1>Join us for free</h1>
                            <p className="lead">The madPass if forever free, promise. Just sign up below and see what happens.</p>
                            <Form className="mt-3">
                                <Form.Group controlId="registerEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control
                                        value={this.state.regEmail}
                                        onChange={this.handleInputChange}
                                        name="regEmail"
                                        type="email"
                                        placeholder="Enter email" />
                                    <Form.Text className={`text-danger ${this.state.hideEmailError}`}>
                                        Email already been used. Please login your account.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="registerPass">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        value={this.state.regPass}
                                        onChange={this.handleInputChange}
                                        name="regPass"
                                        type="password"
                                        placeholder="Password" />
                                    <Form.Text className={`text-danger ${this.state.hideRegPassError}`}>
                                        Password does not match.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="registerPass2">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control
                                        value={this.state.regConfirmPass}
                                        onChange={this.handleInputChange}
                                        name="regConfirmPass"
                                        type="password"
                                        placeholder="Confirm Password" />
                                </Form.Group>

                                <Button
                                    onClick={this.handleRegister}
                                    disabled={!(this.state.regEmail && this.state.regPass && this.state.regConfirmPass)}
                                    variant="dark" >
                                    Sign-up
                                </Button>
                            </Form>
                        </Col>

                        <Col md={2} className="text-center mt-5 mx-5 d-none d-md-block vhr">

                        </Col>

                        <Col md={5} className="mt-5">
                            <h1>Already a member?</h1>
                            <p className="lead">Well, you're a lot cooler than we thought. Login here to view your vault.</p>
                            <Form className="mt-3">
                                <Form.Group controlId="signInEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control
                                        value={this.state.loginUser}
                                        name="loginUser"
                                        onChange={this.handleInputChange}
                                        type="email"
                                        placeholder="Enter email" />
                                    <Form.Text className={`text-danger ${this.state.hideLoginError}`}>
                                        Incorrect Email/Password
                                </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="signInPass">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        value={this.state.loginPass}
                                        name="loginPass"
                                        onChange={this.handleInputChange}
                                        type="password"
                                        placeholder="Password" />
                                </Form.Group>

                                <Button
                                    onClick={this.handleLogin}
                                    disabled={!(this.state.loginUser && this.state.loginPass)}
                                    variant="dark" >
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