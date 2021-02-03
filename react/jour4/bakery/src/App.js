import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button";
// import Add from "./components/Add";
// import List from "./components/List";
// import Pay from "./components/Pay";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeTabs: "Add",
      items: []
    }
  }

  selectedAdd = (event) => {
    console.log(event)
    this.setState({
      activeTabs: event.target.value
    })
  }
  selectedList = (event) => {
    this.setState({
      activeTabs: event.target.onClick
    })
  }
  selectedPay = (event) => {
    this.setState({
      activeTabs: event.target.onClick
    })
  }


  render() {
    return (
      <div className="container">
        <div className="row">
          <Button isSelected={this.state.activeTabs === "add" ? " form-control col-2 btn btn-secondary" : " form-control btn btn-outline-primary"} onClick={this.selectedAdd}>Add</Button>
          <Button isSelected={this.state.activeTabs === "List" ? " form-control col-2 btn btn-secondary" : " form-control btn btn-outline-primary"} onClick={this.selectedList}>List</Button>
          <Button isSelected={this.state.activeTabs === "Pay" ? " form-control col-2 btn btn-secondary" : " form-control btn btn-outline-primary"} onClick={this.selectedPay}>Pay</Button>


        </div>
      </div>
    );
  }
}

export default App;
