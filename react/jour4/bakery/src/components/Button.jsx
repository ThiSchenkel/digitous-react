import "../App.css";
import React from "react";

class Button extends React.Component {



    render() {
        return (
            <button
                className={this.props.isSelected === true ? "  btn btn-primary" : "  btn btn-outline-secondary"} type="submit" onClick={this.props.onClick}> {this.props.children}
            </button>
        )
    }
}
export default Button;