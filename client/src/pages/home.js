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

        this.handleShowAddPassMod = this.handleShowAddPassMod.bind(this);
        this.handleCloseAddPassMod = this.handleCloseAddPassMod.bind(this);

        this.handleShowNotes = this.handleShowNotes.bind(this);
        this.handleCloseNotes = this.handleCloseNotes.bind(this);

        this.handleShowAcctMod = this.handleShowAcctMod.bind(this);
        this.handleCloseAcctMod = this.handleCloseAcctMod.bind(this);

        this.renderPassBubble = this.renderPassBubble.bind(this);

        this.state = {
            open: false,
            showModal: false,
            userID: null,
            email: null,
            accountDB: [],

            showAddPassModal: false,
            showUpPassModal: false,
            showAddNoteModal: false,
            showAcctModal: false,

            acctName: "",
            acctUsername: "",
            acctUrl: "",
            acctPass: "",
            acctNotes: "",
            groupedAccounts: [],
            renderPage: false,

            newPass: "",
            confirmNewPass: "",
            hideNewPassError: "d-none",
            search: ""
        };
    }

    setRenderPage = () => {
        this.setState({
            renderPage: true
        });
    }

    getUserInfoAccounts = () => {
        // get UserInfo including all accounts
        API.getUserInfo(localStorage.getItem('userID'), {
            headers: {
                'Authorization': "Bearer " + localStorage.getItem('token')
            }
        })
            .then(userInfo => {

                const accounts = userInfo.data.accountInfo;

                let groupedAccountsArr = [];
                for (let i = 0; i < accounts.length; ++i) {
                    let j = Math.floor(i / 3);
                    if (typeof groupedAccountsArr[j] === 'undefined') groupedAccountsArr[j] = [];
                    groupedAccountsArr[j].push(accounts[i]);
                }
                console.log(this.state.groupedAccounts);
                this.setState({
                    email: userInfo.data.email,
                    accountDB: userInfo.data.accountInfo,
                    groupedAccounts: groupedAccountsArr
                });

                console.log(this.state.groupedAccounts);
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

    //API call keeps running in the background
    componentDidUpdate(prevState) {



    }

    renderPassBubble = () => {

        return (
            <Col>
                {this.state.groupedAccounts.map(accountGroup => (
                    <div className="d-flex" >
                        <PassBubble
                            name={accountGroup[0].name}
                            user={accountGroup[0].username}
                            pass={accountGroup[0].password}
                            link={accountGroup[0].link}
                            notes={accountGroup[0].notes}
                            userID={accountGroup[0]._id}
                            getInfo={this.getUserInfoAccounts}
                        />

                        {accountGroup.length > 1 && <PassBubble
                            name={accountGroup[1].name}
                            user={accountGroup[1].username}
                            pass={accountGroup[1].password}
                            link={accountGroup[1].link}
                            notes={accountGroup[1].notes}
                            userID={accountGroup[1]._id}
                            getInfo={this.getUserInfoAccounts}
                        />}
                        {accountGroup.length > 2 && <PassBubble
                            name={accountGroup[2].name}
                            user={accountGroup[2].username}
                            pass={accountGroup[2].password}
                            link={accountGroup[2].link}
                            notes={accountGroup[2].notes}
                            userID={accountGroup[2]._id}
                            getInfo={this.getUserInfoAccounts}
                        />}
                    </div >
                ))}
            </Col>
        );
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    handleNewUserPass = event => {
        event.preventDefault();
        // show error if password does not match
        if (this.state.newPass !== this.state.confirmNewPass) {
            this.setState({
                newPass: "",
                confirmNewPass: "",
                hideNewPassError: "d-block"
            });
        } else {
            // Update password in db
            let config = {
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem('token')
                }
            }

            let newPass = {
                Password: this.state.newPass
            }

            API.updateUserPass(localStorage.getItem('userID'), newPass, config)
                .then(data => {
                    // Log Data
                    this.setState({
                        Password: data.data.Password
                    });

                    this.handleCloseAcctMod();
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }

    handleLogout = event => {
        localStorage.setItem('token', null);
        localStorage.setItem('userID', null);
        window.location.assign('/');
    }

    handleCloseAddPassMod() {
        this.setState({ showAddPassModal: false });
    }

    handleShowAddPassMod() {
        this.setState({ showAddPassModal: true });
    }

    handleCloseNotes() {
        this.setState({ showAddNoteModal: false });
    }

    handleShowNotes() {
        this.setState({ showAddNoteModal: true });
    }

    handleShowAcctMod() {
        this.setState({ showAcctModal: true });
    }

    handleCloseAcctMod() {
        this.setState({ showAcctModal: false });
    }

    handleAddPass = event => {
        event.preventDefault();

        this.setState({
            acctName: "",
            acctUsername: "",
            acctPass: "",
            acctUrl: "",
            acctNotes: ""
        });

        let newAccount = {
            name: this.state.acctName,
            username: this.state.acctUsername,
            password: this.state.acctPass,
            link: this.state.acctUrl,
            notes: this.state.acctNotes
        }

        let config = {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem('token')
            }
        }

        API.createAcctPass(localStorage.getItem('userID'), config, newAccount)
            .then(newAcctData => {
                console.log(newAcctData);
                this.getUserInfoAccounts();
            }).catch(err => {
                console.log(err);
            });
        // Close modal
        this.setState({ showAddPassModal: false });
    }

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
                                    onClick={this.handleShowAddPassMod}
                                ><i className="fas fa-plus"></i> Add Entry</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title={this.state.email} id="basic-nav-dropdown3">
                                <NavDropdown.Item onClick={this.handleShowAcctMod}><i className="fas fa-cog"></i> Account Settings</NavDropdown.Item>
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
                                    name="search"
                                    onChange={this.handleInputChange}
                                    value={this.state.search}
                                />
                                <InputGroup.Append>
                                    <Button
                                        onClick={this.getUserInfoAccounts}
                                        variant="outline-secondary"
                                    ><i className="fas fa-search"></i></Button>
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

                <Modal centered size="lg" show={this.state.showAddPassModal} onHide={this.handleCloseAddPassMod}>
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
                                            <Form.Control
                                                value={this.state.acctName}
                                                onChange={this.handleInputChange}
                                                name="acctName"
                                                type="text"
                                            />
                                        </Form.Group>

                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Username</Form.Label>
                                            <Form.Control
                                                value={this.state.acctUsername}
                                                onChange={this.handleInputChange}
                                                name="acctUsername"
                                                type="text"
                                            />
                                        </Form.Group>

                                    </Form>
                                </Col>

                                <Col>
                                    <Form>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>URL</Form.Label>
                                            <Form.Control
                                                value={this.state.acctUrl}
                                                onChange={this.handleInputChange}
                                                name="acctUrl"
                                                type="text" />
                                        </Form.Group>


                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control
                                                value={this.state.acctPass}
                                                onChange={this.handleInputChange}
                                                name="acctPass"
                                                type="password" />
                                        </Form.Group>

                                    </Form>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Notes</Form.Label>
                                        <Form.Control
                                            value={this.state.acctNotes}
                                            onChange={this.handleInputChange}
                                            name="acctNotes"
                                            as="textarea" rows="4" />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Container>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleCloseAddPassMod}>
                            Close
                    </Button>
                        <Button variant="primary" onClick={this.handleAddPass}>
                            Add
                    </Button>
                    </Modal.Footer>
                </Modal>


                <Modal centered size="md" show={this.state.showAcctModal} onHide={this.handleCloseAcctMod}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update Password</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Container>

                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Current Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        name="oldPass"
                                    />
                                </Form.Group>
                            </Form>

                            <Form>
                                <Form.Group controlId="updateUserPass">
                                    <Form.Label>New Password</Form.Label>
                                    <Form.Control
                                        value={this.state.newPass}
                                        onChange={this.handleInputChange}
                                        name="newPass"
                                        type="password"
                                    />
                                    <Form.Text className={`text-danger ${this.state.hideNewPassError}`}>
                                        Passwords does not match.
                                        </Form.Text>
                                </Form.Group>
                            </Form>

                            <Form>
                                <Form.Group controlId="updateUserPass2">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control
                                        value={this.state.confirmNewPass}
                                        onChange={this.handleInputChange}
                                        type="password"
                                        name="confirmNewPass"
                                    />
                                </Form.Group>
                            </Form>

                        </Container>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleCloseAcctMod} variant="danger">Close</Button>
                        <Button onClick={this.handleNewUserPass} variant="primary">Update</Button>
                    </Modal.Footer>
                </Modal>

                <Modal centered size="lg" show={this.state.showAddNoteModal} onHide={this.handleCloseNotes}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add New Note</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Container>

                            <Row>
                                <Col>
                                    <Form>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Note Title</Form.Label>
                                            <Form.Control type="text" />
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
                        <Button variant="secondary" onClick={this.handleCloseNotes}>
                            Close
                    </Button>
                        <Button variant="primary" onClick={this.handleCloseNotes}>
                            Add
                    </Button>
                    </Modal.Footer>
                </Modal>

            </div>
        );
    }
}

export default Home;