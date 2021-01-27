import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  decrementCount = () => {
    this.state({ count: this.state.count - 1 })
  }
  incrementCount = () => {
    this.state({ count: this.state.count + 1 })
  }

  render() {
    return (
      <div>
        <h1 className="Counter" style={{ textAlign: "center" }}>Counter</h1>
        <h2 className="valCount">{this.state.count}</h2>
        <button style={{ color: "green" }} onClick={() => { this.decrementCount() }} />
        <button style={{ color: "red" }} onClick={() => { this.incrementCount() }} />
      </div >
    );
  }
}

export default App;