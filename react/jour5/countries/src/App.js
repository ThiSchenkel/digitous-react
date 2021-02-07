import React from "react";
import "./App.css";
import Button from "./componants/Button";
import Card from "./componants/Card";

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

  handleInputChange = (val) => {
    this.setState({
      searchCountry: val.target.value
    })
  }



  render() {
    return (
      <div className="container" >
        <h1 className="text-center">Country Selector</h1>
        <div className="row mx-auto">
          <input type="text" className="form-control" placeholder="Search" onChange={(val) => this.handleInputChange(val)} />
          <Button onClick={(event) => this.getCountry(this.state.searchCountry, event)}>Search</Button>
        </div>

        <Card country={
          {
            name: this.state.name,
            capital: this.state.capital,
            region: this.state.region,
            population: this.state.population,
            flag: this.state.flag
          }} />
      </div>
    );
  }
}
export default App;
