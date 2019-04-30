import React from "react";
//Components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Footer extends React.Component {

    render() {
        return (
            <div>
                <Container className="text-center mt-5">
                    <h1>This is a footer</h1>
                </Container>
            </div>
        );
    }
}

export default Footer;