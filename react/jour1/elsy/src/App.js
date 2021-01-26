import React from "react";
import './App.css';
import Box from "./components/Box";
import './styles/global.css';


export class App extends React.Component {
  tempMin = -20;
  tempMax = 40;
  heartMin = 80;
  heartMax = 180;
  stepsMin = 0;
  stepsMax = 50000;
  render() {
    return (
      <div className="container-fluid" >
        <div className="row">
          {/* boite Water */}
          <Box icon={"local_drink"} color={"#3A85FF"} value={"1.5"} unit={"L"} />
          {/* boite Steps */}
          <Box icon={"directions_walk", "favorite", "wb-sunny"} color={"black", "red", "yellow"} value={"3000", "120", "-10"} unit={"steps", "bpm", "°C"} />
          {/* boite Heart */}
          <Box icon={"directions_walk", "favorite", "wb-sunny"} color={"black", "red", "yellow"} value={"3000", "120", "-10"} unit={"steps", "bpm", "°C"} />
          {/* boite Temperature */}
          <Box icon={"directions_walk", "favorite", "wb-sunny"} color={"black", "red", "yellow"} value={"3000", "120", "-10"} unit={"steps", "bpm", "°C"} />
          <p>Heart : {this.heartMin}</p>
          <p>Temperature : {this.tempMin}</p>
          <p>Steps : {this.stepsMin}</p>
        </div>
      </div>
    );
  }
}
export default App;