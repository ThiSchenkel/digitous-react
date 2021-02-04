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
      .then(response => response.json())
      .then(state => {
        this.setState({ name: state[0].name })
        this.setState({ capital: state[0].capital })
        this.setState({ region: state[0].region })
        this.setState({ population: state[0].population })
        this.setState({ flag: state[0].flag })
      })
    // .then(response => response.blob())
    // .then(flag => {
    //   this.setState({ flag: flag[0].flag })
    // })
  }

  getCountry = (country) => {
    fetch("https://restcountries.eu/rest/v2/name/all")
      .then(response => response.json())
      .then(country => {
        country = country.map((country) => {
          const { callingCodes, name, capital, region, population, flag } = country
          console.log(callingCodes, name, capital, region, population, flag)
        })
      })
  }


  render() {
    return (
      <div className="container">
        <h1 className="text-center">Country Selector</h1>
        <div className="row mx-auto">
          <Button onClick={this.getCountry}>France</Button>
          <Button onClick={this.getCountry}>Brazil</Button>
          <Button onClick={this.getCountry}>Croatia</Button>
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
