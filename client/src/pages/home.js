import API from "../utils/API";
import React from "react";
import { Link } from "react-router-dom";
// Component below
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import NavDropdown from "react-bootstrap/NavDropdown";
import PassBubble from "../components/PassBubble/index";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Home extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            open: false,
            user: "tester@example.com",
            showModal: false
        };
    }

    renderPassBubble = () => {
        let arr = [''];
        let sampleID = ["1", "2", "3", "4", "5", "6", "7", "8"];

        for (let i = 0; i < sampleID.length; i += 3) {

            arr.push(
                <div className="d-flex">
                    <PassBubble name="Amazon" user="test@gmail.com" />
                    <PassBubble name="Amazon" user="test@gmail.com" />
                    <PassBubble name="Amazon" user="test@gmail.com" />
                </div>
            );
        }



        return arr;

    }

    handleClose() {
        this.setState({ showModal: false });
    }

    handleShow() {
        this.setState({ showModal: true });
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
                        <Nav>
                            <NavDropdown title="Passwords" id="basic-nav-dropdown1">
                                <NavDropdown.Item><i class="fas fa-briefcase"></i> View Vault</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item
                                    className="text-danger"
                                    onClick={this.handleShow}
                                ><i class="fas fa-plus"></i> Add Entry</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Notes" id="basic-nav-dropdown2">
                                <NavDropdown.Item><i class="fas fa-clipboard"></i> View Notes</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item className="text-danger"><i class="fas fa-plus"></i> Add Entry</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title={this.state.user} id="basic-nav-dropdown3">
                                <NavDropdown.Item><i class="fas fa-cog"></i> Account Settings</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item className="text-danger"><i class="fas fa-sign-out-alt"></i> Logout</NavDropdown.Item>
                            </NavDropdown>


                        </Nav>
                        <Nav className="ml-auto">
                            <InputGroup className="ml-3">
                                <FormControl
                                    placeholder="search my vault"
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

                <Container className="body-min mt-3">

                    <Row className="text-center mt-3">

                        <Col>

                            <div className="d-flex">
                                <PassBubble name="Amazon" user="test@gmail.com" />
                                <PassBubble name="Amazon" user="test@gmail.com" />
                                <PassBubble name="Amazon" user="test@gmail.com" />
                            </div>

                            <div className="d-flex">
                                <PassBubble name="Amazon" user="test@gmail.com" />
                                <PassBubble name="Amazon" user="test@gmail.com" />
                                <PassBubble name="Amazon" user="test@gmail.com" />
                            </div>

                            <div className="d-flex">
                                <PassBubble name="Amazon" user="test@gmail.com" />
                                <PassBubble name="Amazon" user="test@gmail.com" />
                                <PassBubble name="Amazon" user="test@gmail.com" />
                            </div>

                            <div className="d-flex">
                                <PassBubble name="Amazon" user="test@gmail.com" />
                                <PassBubble name="Amazon" user="test@gmail.com" />
                                <PassBubble name="Amazon" user="test@gmail.com" />
                            </div>

                            <div className="d-flex">
                                <PassBubble name="Amazon" user="test@gmail.com" />
                                <PassBubble name="Amazon" user="test@gmail.com" />
                                <PassBubble name="Amazon" user="test@gmail.com" />
                            </div>

                            <div className="d-flex">
                                <PassBubble name="Amazon" user="test@gmail.com" />
                                <PassBubble name="Amazon" user="test@gmail.com" />
                                <PassBubble name="Amazon" user="test@gmail.com" />
                            </div>
                        </Col>
                    </Row>

                </Container>

                <Modal centered size="lg" show={this.state.showModal} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Password</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Container>

                            <Row>
                                <Col>
                                    <Form>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Account Name</Form.Label>
                                            <Form.Control type="text" />
                                        </Form.Group>


                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Username</Form.Label>
                                            <Form.Control type="text" />
                                        </Form.Group>

                                    </Form>
                                </Col>

                                <Col>
                                    <Form>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>URL</Form.Label>
                                            <Form.Control type="text" />
                                        </Form.Group>


                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" />
                                        </Form.Group>

                                    </Form>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Notes</Form.Label>
                                        <Form.Control as="textarea" rows="4" />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Container>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                    </Button>
                        <Button variant="primary" onClick={this.handleClose}>
                            Add
                    </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default Home;