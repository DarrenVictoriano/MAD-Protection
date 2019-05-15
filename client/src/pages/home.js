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

    constructor(props) {
        super(props);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.renderPassBubble = this.renderPassBubble.bind(this);

        this.state = {
            open: false,
            showModal: false,
            userID: null,
            email: null,
            accountDB: []
        };
    }

    getUserInfoAccounts = () => {
        // get UserInfo including all accounts
        API.getUserInfo(this.props.getUserID, {
            headers: {
                'Authorization': "Bearer " + this.props.getToken
            }
        })
            .then(userInfo => {

                this.setState({
                    email: userInfo.data.email,
                    accountDB: userInfo.data.accountInfo
                });
            })
            .catch(err => {
                // this means token is invalid or expired
                // will reroute to a relogin page.
                console.log(err);

                // change the route to the re-login page
                this.props.history.push("/relog");
            });
    }

    componentDidMount() {
        this.getUserInfoAccounts();

    }

    // API call keeps running in the background
    // componentDidUpdate() {
    //     this.getUserInfoAccounts();
    // }

    renderPassBubble = () => {
        const accounts = this.state.accountDB;
        console.log(accounts[0]);

        let groupedAccounts = [];
        for (let i = 0; i < accounts.length; ++i) {
            let j = Math.floor(i / 3);
            if (typeof groupedAccounts[j] === 'undefined') groupedAccounts[j] = [];
            groupedAccounts[j].push(accounts[i]);
        }

        return (
            <Col>
                {groupedAccounts.map(accountGroup => (
                    <div className="d-flex" >
                        <PassBubble name={accountGroup[0].name} user={accountGroup[0].username} />
                        {accountGroup.length > 1 && <PassBubble name={accountGroup[1].name} user={accountGroup[1].username} />}
                        {accountGroup.length > 2 && <PassBubble name={accountGroup[2].name} user={accountGroup[2].username} />}
                    </div >
                ))}
            </Col>
        );
    }

    handleLogout = event => {
        window.location.assign('/');
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

                                <NavDropdown.Item
                                    href="/home"
                                >
                                    <i className="fas fa-briefcase"></i> View Vault
                                </NavDropdown.Item>


                                <NavDropdown.Divider />
                                <NavDropdown.Item
                                    className="text-danger"
                                    onClick={this.handleShow}
                                ><i className="fas fa-plus"></i> Add Entry</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Notes" id="basic-nav-dropdown2">

                                <NavDropdown.Item
                                    href="/notes"
                                >
                                    <i className="fas fa-clipboard"></i> View Notes
                                </NavDropdown.Item>


                                <NavDropdown.Divider />
                                <NavDropdown.Item className="text-danger"><i className="fas fa-plus"></i> Add Entry</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title={this.state.email} id="basic-nav-dropdown3">
                                <NavDropdown.Item><i className="fas fa-cog"></i> Account Settings</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item
                                    onClick={this.handleLogout}
                                    className="text-danger"><i className="fas fa-sign-out-alt"></i> Logout</NavDropdown.Item>
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
                                    <Button variant="outline-secondary"><i className="fas fa-search"></i></Button>
                                </InputGroup.Append>
                            </InputGroup>

                        </Nav>

                    </Navbar.Collapse>
                </Navbar>

                <Container className="body-min mt-3">

                    <Row className="text-center mt-3">

                        {this.renderPassBubble()}

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