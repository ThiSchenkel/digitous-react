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
      .then((data) => {
        this.setState({
          name: data.name,
          capital: data.capital,
          flag: data.flag,
          region: data.region
        })
      }
      )
  }


  render() {
    const { countries } = this.componentDidMount;
    return (
      <div className="container">
        <div className="row text-center">
          <h1>Country Selector</h1>
          <ul>
            {countries.map(country => <li key={country.objectID}></li>)}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
