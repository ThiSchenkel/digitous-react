import React from "react";
import "./App.css";
import Counter from "./components/Counter"


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  decrementCount = () => {
    this.setState({ count: this.state.count - 1 })
  }
  incrementCount = () => {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    return (
      <div className="container">
        <h1 className="Counter" style={{ textAlign: "center", margin: "100px" }}>Counter</h1>
        <Counter removeFunction={this.decrementCount} count={this.state.count} addFunction={this.incrementCount} />
      </div>
    );
  }
}
export default App;