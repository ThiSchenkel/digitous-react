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
      steps: 3000,
    };
  }
  tempMin = -20;
  tempMax = 40;
  heartMin = 80;
  heartMax = 180;
  stepsMin = 0;
  stepsMax = 50000;

  onHeartChange = (value) => {
    this.setState({ heart: value.target.value })
  }

  onStepsChange = (value) => {
    this.setState({ steps: value.target.value })
  }

  onTemperatureChange = (value) => {
    this.setState({ temperature: value.target.value })
  }

  // calculateWater = (value) => {
  //   const value = 1.5;
  //   if (temperature > 20) {
  //     temperature = temperature + ((temperature / 20) * 0.02)
  //   }
  //   else if (heart > 120) {
  //     heart = heart + ((heart / 120) * 0.0008)
  //   }
  //   else if (steps > 10000) {
  //     steps = steps + ((steps / 10000) * 0.00002)
  //   }

  //   this.setState({ water: value.target.value })
  // }


  render() {
    return (
      <div className="container-fluid" >
        <div className="row">
          {/* boite Water */}
          <Box icon={"local_drink"} color={"#3A85FF"} value={"1.5"} unit={"L"} />
          {/* boite Steps */}
          <Box icon={"directions_walk"} color={"black"} value={this.state.steps} unit={"steps"} onChange={this.onStepsChange} />
          {/* boite Heart */}
          <Box icon={"favorite"} color={"red"} value={this.state.heart} unit={"bpm"} onChange={this.onHeartChange} />
          {/* boite Temperature */}
          <Box icon={"wb_sunny"} color={"yellow"} value={this.state.temperature} unit={"°C"} onChange={this.onTemperatureChange} />
        </div>
      </div>
    );
  }
}
export default App;