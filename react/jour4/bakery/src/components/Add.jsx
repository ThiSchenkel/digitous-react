import "../App.css";
import React from "react";
import Button from "./Button"
import App from "../App"


class Add extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            productName: "",
            price: 1
        }
    }

    updateProductName = (event) => {
        const productName = this.state.productName
        this.setState({ productName: event.target.value })
        console.log(productName)
    }

    updatePrice = (event) => {
        const price = this.state.price
        this.setState({ price: event.target.value })
        console.log(price)
    }

    render() {
        return (
            <div className="container">
                <div className="row ">
                    <div className="col ">
                        <input type="text" value={this.state.productName} onChange={this.updateProductName} />
                        <input type="range" value={this.state.price} min="1" max="10" onChange={this.updatePrice} />
                        <Button onClick={this.props.pushList}>Add</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Add;