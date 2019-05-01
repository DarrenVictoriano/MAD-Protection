import React from "react";
import "./banner.css"

class Banner extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            backgroundImage: props.bgImage,
            moreClass: props.addClass
        }
    }

    render() {
        return (
            <div
                className={`hero ${this.state.moreClass}`} {...this.props}
                style={{ backgroundImage: `url(${this.state.backgroundImage})` }}
            >
                {this.props.children}
            </div>
        );
    }
}

export default Banner;