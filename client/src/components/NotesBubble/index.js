import React from "react";
import Button from "react-bootstrap/Button";
import "./style.css";

class NotesBubble extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: props.name,
            user: props.user,
            id: props.id
        }
    }

    render() {

        return (

            <div className="card bubble-style m-3">
                <div className="card-header p-1">
                    <h5>{this.state.name}</h5>
                </div>
                <div className="card-body p-2">
                    <p className="card-text mb-1">{this.state.user}</p>

                    <Button onClick={() => this.props.onClick()} className="btn btn-light py-0 px-2 m-1">
                        <small className="p-0 m-0">
                            <i className="fas fa-eye"></i> View
                        </small>
                    </Button>
    
                </div>
            </div>

        );
    };
};

export default NotesBubble;