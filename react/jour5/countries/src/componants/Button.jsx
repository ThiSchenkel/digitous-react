import React from "react";
import "../App.css";

class Button extends React.Component {


    render() {

        return (

            <div className="col ">
                <button className="btn btn-primary" children={this.props.children} onClick={this.props.onClick} />


            </div>

        );
    }
} export default Button;