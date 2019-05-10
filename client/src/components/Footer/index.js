import React from "react";
import { Link } from "react-router-dom";
//Components
import Container from "react-bootstrap/Container";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import "./style.css";

class Footer extends React.Component {

    render() {
        return (
            <div className="bg mt-5 pt-2">
                <Container className="text-center p-3">
                    <p className="m-0">&copy; 2019 madPASS. All rights reserved.</p>

                    <p className="m-0 font-italic">
                        Created and Designed by: &nbsp;

                        <OverlayTrigger
                            key="m"
                            placement="top"
                            overlay={
                                <Tooltip id={`tooltip-m`}>
                                    Michael Rivera
                                </Tooltip>
                            }
                        >
                            <Link className="text-light" to="/">m</Link>
                        </OverlayTrigger>
                        &nbsp;&bull;&nbsp;
                        <OverlayTrigger
                            key="a"
                            placement="top"
                            overlay={
                                <Tooltip id={`tooltip-a`}>
                                    Aaron Williams
                                </Tooltip>
                            }
                        >
                            <Link className="text-light" to="/">a</Link>
                        </OverlayTrigger>
                        &nbsp;&bull;&nbsp;
                        <OverlayTrigger
                            key="d"
                            placement="top"
                            overlay={
                                <Tooltip id={`tooltip-d`}>
                                    Darren Victoriano
                                </Tooltip>
                            }
                        >
                            <Link className="text-light" to="/">d</Link>
                        </OverlayTrigger>
                    </p>

                    <p className="mt-4 mb-0">Find us on</p>
                    <Link to="/">
                        <h1 className="text-light"><i className="fab fa-github"></i></h1>
                    </Link>
                </Container>
            </div>
        );
    }
}

export default Footer;