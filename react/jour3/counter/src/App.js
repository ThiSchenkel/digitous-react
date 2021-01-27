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

      <div className="container">
        <h1 className="Counter" style={{ textAlign: "center" }}>Counter</h1>
        <div className="row" style={{ textAlign: "center" }}>
          <div className=" col" >
            <button style={{ color: "green", borderRadius: "50%", fontSize: "30px", outline: "none", width: "50px", height: "50px" }} onClick={() => { this.decrementCount() }}> - </button>
            <div className="col" >
              <h2>{this.state.count}</h2></div>
            <div className=" col" >
              <button style={{ color: "red", borderRadius: "50%", fontSize: "30px", outline: "none", width: "50px", height: "50px" }} onClick={() => { this.incrementCount() }} > + </button>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default App;