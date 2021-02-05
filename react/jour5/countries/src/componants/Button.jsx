import React from "react";
import "../App.css";

class Button extends React.Component {


    render() {

        return (

            <div className="col-4 mx-auto text-center">
                <button type=" button" className="col col-6 m-4 mx-auto btn btn-primary" onClick={this.props.onClick}>{this.props.children}</button>

            </div>


        );
    }
} export default Button;