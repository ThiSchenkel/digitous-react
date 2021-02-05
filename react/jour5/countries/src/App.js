import React from "react";
import "./App.css";
import Button from "./componants/Button"

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
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          name: response[0].name,
          capital: response[0].capital,
          region: response[0].region,
          population: response[0].population,
          flag: response[0].flag
        })
      })
  }

  getCountry = (country) => {
    fetch(`https://restcountries.eu/rest/v2/name/${country}`)
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          name: response[0].name,
          capital: response[0].capital,
          region: response[0].region,
          population: response[0].population,
          flag: response[0].flag
        })
      })
  }

  render() {
    return (
      <div className="container" >
        <h1 className="text-center">Country Selector</h1>
        <div className="row mx-auto">
          <Button onClick={(event) => this.getCountry("france", event)}>France</Button>
          <Button onClick={(event) => this.getCountry("brazil", event)}>Brazil</Button>
          <Button onClick={(event) => this.getCountry("croatia", event)}>Croatia</Button>
        </div>

        <div className="row ">
          <div className="col-6 mx-auto card" style={{ width: "18rem" }}>
            <img className=" card-img-top" title="Flag" src={this.state.flag} />
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
