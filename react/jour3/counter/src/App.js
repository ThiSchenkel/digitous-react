import React from "react";
import "./App.css";
import Counter from "./components/Counter"


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  decrementCount = () => {
    this.setState({ count: this.state.count - 1 })
  }
  incrementCount = () => {
    this.setState({ count: this.state.count + 1 })
  }

  addFunction = () => {
    this.setState(this.state.incrementCount());
    this.addFunction = this.addFunction.bind(this);
  }

  removeFunction = () => {
    this.setState(this.state.removeFunction());
    this.removeFunction = this.removeFunction.bind(this);
  }

  render() {
    return (

      <div className="container">
        <h1 className="Counter" style={{ textAlign: "center", margin: "100px" }}>Counter</h1>
        <div className="row" style={{ textAlign: "center" }}>
          <Counter addFunction removeFunction />
        </div>
      </div>


    );
  }
}

export default App;