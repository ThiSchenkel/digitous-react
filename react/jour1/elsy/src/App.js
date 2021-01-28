import React from "react";
import './App.css';
import Box from "./components/Box";
import './styles/global.css';


export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      water: 0,
      heart: 120,
      temperature: -10,
      steps: 3000
    };
    //this.onHeartChange = this.onHeartChange.bind(this);
  }
  tempMin = -20;
  tempMax = 40;
  heartMin = 80;
  heartMax = 180;
  stepsMin = 0;
  stepsMax = 50000;

  onHeartChange = (value) => {
    console.log("value", value);
    this.setState({ heart: value })
  }


  render() {
    return (
      <div className="container-fluid" >
        <div className="row">
          {/* boite Water */}
          <Box icon={"local_drink"} color={"#3A85FF"} value={"1.5"} unit={"L"} />
          {/* boite Steps */}
          <Box icon={"directions_walk"} color={"black"} value={3000} unit={"steps"} />
          {/* boite Heart */}
          <Box icon={"favorite"} color={"red"} value={120} unit={"bpm"} onChange={this.onHeartChange} />
          {/* boite Temperature */}
          <Box icon={"wb_sunny"} color={"yellow"} value={-10} unit={"°C"} />
          {/* <p>Heart : {this.heartMin}</p>
          <p>Temperature : {this.tempMin}</p>
          <p>Steps : {this.stepsMin}</p> */}
        </div>
      </div>
    );
  }
}
export default App;