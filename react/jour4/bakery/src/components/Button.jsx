import logo from "../logo.svg";
import "../App.css";
import React from "react";

class Button extends React.Component {



    render() {
        return (
            <button className={this.props.isSelected} type="submit" onClick={this.props.onClick}> {this.props.children}</button>
        )
    }
}
export default Button;