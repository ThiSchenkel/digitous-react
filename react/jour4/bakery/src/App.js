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

  addItem = (name, price) => {
    const items = this.state.items
    const newObject = {
      name: "",
      price: ""
    }
    const inserItems = [...newObject]
    this.setState({ items: inserItems })
    console.log(items)
  }


  render() {
    return (
      <div className="container text-center">
        <h1>Bakery</h1>
        <Button isSelected={this.state.activeTabs === "add"} onClick={this.selectedAdd} pushList={this.state.items}>Add</Button>
        <Button isSelected={this.state.activeTabs === "list"} onClick={this.selectedList}>List</Button>
        <Button isSelected={this.state.activeTabs === "pay"} onClick={this.selectedPay}>Pay</Button>
        {this.renderContent()}
      </div>
    );
  }
}

export default App;
