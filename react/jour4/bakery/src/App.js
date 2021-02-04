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
      items: []
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

  add = (name, price) => {
    const obj = {
      name: name,
      price: price
    }
    const newlist = this.state.items
    newlist.push(obj)
    this.setState({
      items: newlist
    })
  }

  renderContent = () => {
    if (this.state.activeTabs === "add") {
      return <Add addItem={this.add} />
    }
    if (this.state.activeTabs === "list") {
      return <List listItems={this.state.items} />
    }
    if (this.state.activeTabs === "pay") {
      return <Pay />
    }
  }

  // addItem = (name, price) => {
  //   const items = this.state.items
  //   const listItems = []
  //   const newObject = [{
  //     name: this.props.productName.value,
  //     price: this.props.price.value
  //   }]
  //   this.setState({ items: [...listItems, { newObject }] })
  // }

  render() {
    return (
      <div className="container text-center">
        <h1>Bakery</h1>
        <Button isSelected={this.state.activeTabs === "add"} onClick={this.selectedAdd}>Add</Button>
        <Button isSelected={this.state.activeTabs === "list"} onClick={this.selectedList}>List</Button>
        <Button isSelected={this.state.activeTabs === "pay"} onClick={this.selectedPay}>Pay</Button>
        {this.renderContent()}
      </div>
    );
  }
}

export default App;
