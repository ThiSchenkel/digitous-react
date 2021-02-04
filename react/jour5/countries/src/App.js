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
        this.setState({ name: country[0].name })
        this.setState({ capital: country[0].capital })
        this.setState({ region: country[0].region })
        this.setState({ population: country[0].population })
      }); console.log(country)
  }


  render() {
    return (
      <div className="container">
        <h1>Country Selector</h1>
        <div className="row">
          <Button onClick={this.getCountry}>France</Button>
          <Button onClick={this.getCountry}>Brazil</Button>
          <Button onClick={this.getCountry}>Croatia</Button>
        </div>

        <div className="row ">
          <div className="col card" style={{ width: "18rem" }}>
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
