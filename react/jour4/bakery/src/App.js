import React from "react";
import "./App.css";
import Button from "./components/Button";
import Add from "./components/Add";
import List from "./components/List";
import Pay from "./components/Pay";


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeTabs: "Add",
      items: [],
      productName: "",
      price: 1
    }
  }

  selectedAdd = () => {
    this.setState({
      activeTabs: "add"
    })
  }
  selectedList = () => {
    this.setState({
      activeTabs: "list"
    })
  }
  selectedPay = () => {
    this.setState({
      activeTabs: "pay"
    })
  }

  renderContent = () => {
    if (this.state.activeTabs === "add") {
      return <Add />
    }
    if (this.state.activeTabs === "list") {
      return <List />
    }
    if (this.state.activeTabs === "pay") {
      return <Pay />
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
      <div className="container text-center">
        <h1>Bakery</h1>
        <Button isSelected={this.state.activeTabs === "add"} onClick={this.selectedAdd}>Add</Button>
        <Button isSelected={this.state.activeTabs === "list"} onClick={this.selectedList}>List</Button>
        <Button isSelected={this.state.activeTabs === "pay"} onClick={this.selectedPay}>Pay</Button>
        {this.renderContent()}

        <div className="row ">
          <div className="col ">
            <input type="text" value={this.state.productName} onChange={this.updateProductName} />
            <input type="range" value={this.state.price} min="1" max="10" onChange={this.updatePrice} />
            <Button onClick={this.selectedAdd}>Add</Button>
          </div>

        </div>


      </div>
    );
  }
}

export default App;
