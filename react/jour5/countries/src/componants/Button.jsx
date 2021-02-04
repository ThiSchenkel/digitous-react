import React from "react";
import "../App.css";

class Button extends React.Component {


    render() {

        return (

            <div className="col-4 mx-auto text-center">
                <button type=" button" className="col col-4 m-4 mx-auto btn btn-primary" children={this.props.children} onClick={this.props.onClick} />

            </div>


        );
    }
} export default Button;