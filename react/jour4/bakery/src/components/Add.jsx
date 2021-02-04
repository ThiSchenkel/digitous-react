import "../App.css";
import React from "react";
import Button from "./Button"


class Add extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            productName: "",
            price: 1
        }
    }

    updateProductName = (event) => {
        this.setState({ productName: event.target.value })
    }

    updatePrice = (event) => {
        this.setState({ price: event.target.value })
    }

    click = () => {
        console.log('click add')
        this.props.addItem(this.state.productName, this.state.price)
    }

    render() {
        return (
            <div className="container">
                <div className="row ">
                    <div className="col ">
                        <input type="text" className="col" onChange={this.updateProductName} />
                        <input type="range" value={this.state.price} min="1" max="10" onChange={this.updatePrice} />
                        <span>{this.state.price}</span>
                        <button type="button" className="btn btn-primary" onClick={this.click}>Add</button>
                        {/* <Button onClick={this.props.pushList}>Add</Button> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Add;