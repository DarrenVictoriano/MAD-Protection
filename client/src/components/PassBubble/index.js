import API from "../../utils/API";
import React from "react";
import Button from "react-bootstrap/Button";
import "./style.css";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Overlay from "react-bootstrap/Overlay";
import Tooltip from "react-bootstrap/Tooltip";

class PassBubble extends React.Component {

    constructor(props, ...args) {
        super(props, ...args);

        this.handleShowUpPassMod = this.handleShowUpPassMod.bind(this);
        this.handleCloseUpPassMod = this.handleCloseUpPassMod.bind(this);

        this.attachRefUser = targetUser => this.setState({ targetUser });
        this.attachRefPass = targetPass => this.setState({ targetPass });

        this.state = {
            name: props.name,
            user: props.user,
            id: props.userID,
            copyUser: props.onClickUser,
            copyPass: props.onClickPass,

            modalName: props.name,
            modalUser: props.user,
            modalPass: props.pass,
            modalLink: props.link,
            modalNotes: props.notes,

            showCopyUser: false,
            showCopyPass: false
        }
    }

    handleCloseUpPassMod() {
        this.setState({ showUpPassModal: false });
    }

    handleShowUpPassMod() {
        this.setState({ showUpPassModal: true });
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    hideToolTipUser = event => {
        let timeID = setTimeout(() => {
            const { showCopyUser } = this.state;

            this.setState({
                showCopyUser: !showCopyUser
            });

            clearTimeout(timeID);
        }, 500);
    }

    hideToolTipPass = event => {
        let timeID = setTimeout(() => {
            const { showCopyPass } = this.state;

            this.setState({
                showCopyPass: !showCopyPass
            });

            clearTimeout(timeID);
        }, 500);
    }

    clearClipboard = event => {
        setTimeout(() => {
            navigator.clipboard.writeText("");
        }, 5000);
    }


    handleCopyUser = event => {
        const { showCopyUser } = this.state;

        this.setState({ showCopyUser: !showCopyUser });

        navigator.clipboard.writeText(this.state.modalUser);

        this.hideToolTipUser();

        this.clearClipboard();
    }

    handleCopyPass = event => {
        const { showCopyPass } = this.state;

        this.setState({ showCopyPass: !showCopyPass });

        navigator.clipboard.writeText(this.state.modalPass);

        this.hideToolTipPass();

        this.clearClipboard();
    }

    handleUpdate = event => {
        let config = {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem('token')
            }
        }

        let newAccountData = {
            name: this.state.modalName,
            username: this.state.modalUser,
            password: this.state.modalPass,
            link: this.state.modalLink,
            notes: this.state.modalNotes
        }

        API.updateAccount(this.state.id, newAccountData, config)
            .then(data => {
                this.setState({
                    name: data.data.name,
                    user: data.data.username,
                });

                this.props.getInfo();
<<<<<<< HEAD
                // window.location.reload();
=======
                //window.location.reload();
>>>>>>> 4f17b495bd0570e35d400119b45578c74b10d994
                this.handleCloseUpPassMod();

            }).catch(err => {
                console.log(err);
            });
    }

    handleDelete = event => {

        let config = {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem('token')
            }
        }

        API.deleteAccount(this.state.id, config)
            .then(data => {
                console.log(data);
                this.props.getInfo();

                //window.location.reload();
                this.handleCloseUpPassMod();

            }).catch(err => {
                console.log(err);
            });
    }

    render() {
        let { showCopyUser, showCopyPass, targetUser, targetPass } = this.state;
        return (
            <div className="card bubble-style m-3">

                <div className="card-header p-1">
                    <h5>{this.state.name}</h5>
                </div>
                <div className="card-body p-2">
                    <p className="card-text mb-1">{this.state.user}</p>

                    <Button
                        ref={this.attachRefUser}
                        onClick={this.handleCopyUser}
                        className="btn btn-light py-0 px-2 m-1">
                        <small className="p-0 m-0">
                            <i className="fas fa-copy"></i> Username
                        </small>
                    </Button>
                    <Button
                        ref={this.attachRefPass}
                        onClick={this.handleCopyPass}
                        className="btn btn-light py-0 px-2 m-1">
                        <small className="p-0 m-0">
                            <i className="fas fa-copy"></i> Password
                        </small>
                    </Button>
                    <Button
                        onClick={this.handleShowUpPassMod}
                        className="btn btn-light py-0 px-2 m-1">
                        <small className="p-0 m-0">
                            <i className="fas fa-eye"></i> View
                        </small>
                    </Button>
                </div>

                <Modal centered size="lg" show={this.state.showUpPassModal} onHide={this.handleCloseUpPassMod}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update Password</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Container>

                            <Row>
                                <Col>
                                    <Form>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Account Name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={this.state.modalName}
                                                onChange={this.handleInputChange}
                                                name="modalName"
                                            />
                                        </Form.Group>


                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Username</Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={this.state.modalUser}
                                                onChange={this.handleInputChange}
                                                name="modalUser"
                                            />
                                        </Form.Group>

                                    </Form>
                                </Col>

                                <Col>
                                    <Form>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>URL</Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={this.state.modalLink}
                                                onChange={this.handleInputChange}
                                                name="modalLink"
                                            />
                                        </Form.Group>


                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control
                                                type="password"
                                                value={this.state.modalPass}
                                                onChange={this.handleInputChange}
                                                name="modalPass"
                                            />
                                        </Form.Group>

                                    </Form>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Notes</Form.Label>
                                        <Form.Control
                                            value={this.state.modalNotes}
                                            onChange={this.handleInputChange}
                                            name="modalNotes"
                                            as="textarea"
                                            rows="4"
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Container>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button
                            onClick={this.handleDelete}
                            variant="danger"
                        >
                            Delete
                    </Button>
                        <Button
                            onClick={this.handleUpdate}
                            variant="primary"
                        >
                            Update
                    </Button>
                    </Modal.Footer>
                </Modal>

                <Overlay target={targetUser} show={showCopyUser} placement="top">
                    {props => (
                        <Tooltip id="overlay-example" {...props}>
                            Copied to clipboard!
                        </Tooltip>
                    )}
                </Overlay>

                <Overlay target={targetPass} show={showCopyPass} placement="top">
                    {props => (
                        <Tooltip id="overlay-example" {...props}>
                            Copied to clipboard!
                        </Tooltip>
                    )}
                </Overlay>
            </div>

        );
    };
};

export default PassBubble;