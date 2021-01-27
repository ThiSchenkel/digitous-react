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
    this.setState({ count: this.state.count - 1 })
  }
  incrementCount = () => {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    return (
      <div>
        <hi className="Counter">Counter</hi>
        <h2 className="valCount">{this.state.count}</h2>
        <button style={{ backGround: "green" }} onClick={() => { this.decrementCount }} />
        <button style={{ backGround: "red" }} onClick={() => { this.incrementCount }} />
      </div>
    );
  }
}

export default App;