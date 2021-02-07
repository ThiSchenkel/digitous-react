import React from "react";
import "../App.css";

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchCountry: ""
        }
    }

    handleChange = (value) => {
        this.setState({
            searchCountry: value.target.value
        })
    }

    render() {

        return (

            <div className="input-group mb-3">

                {/* <input type="text" className="form-control" placeholder={this.cocoClick} onChange={(val) => this.handleInputChange(val)} /> */}
                <button type=" button" className="col col-6 m-4 mx-auto btn btn-primary" onClick={this.props.onClick}>{this.props.children}</button>
                {/* <Button onClick={(event) => this.getCountry("brazil", event)}>Brazil</Button>  */}


            </div>




        );
    }
} export default Button;