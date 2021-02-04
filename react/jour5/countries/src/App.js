import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      capital: "",
      flag: "",
      population: "",
      region: ""
    }
  }

  componentDidMount = () => {
    fetch("https://restcountries.eu/rest/v2/name/france")
      .then(response => response.json())
      .then(country => {
        this.setState({ name: country[0].name })
        this.setState({ capital: country[0].capital })
        this.setState({ region: country[0].region })
        this.setState({ population: country[0].population })
        this.setState({ flag: country[0].flag })
      });
  }


  render() {

    return (
      <div className="container">
        <h1>Country Selector</h1>
        <div className="row ">
          <div className="col col-6 card" style={{ width: "18rem" }}>
            <p className="card-text">Flag : {this.state.flag}</p>
            <div className="card-body">
              <p className="card-text">Country : {this.state.name}</p>
              <p className="card-text">Capital : {this.state.capital}</p>
              <p className="card-text">Region : {this.state.region}</p>
              <p className="card-text">Population : {this.state.population}</p>

            </div>
          </div>
        </div>
      </div>
    );
  }
} export default App;
