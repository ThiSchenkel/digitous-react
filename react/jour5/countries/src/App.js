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
      .then(name => {
        this.setState({
          name: name.name
        }); console.log(name[0].capital)
      });
  }



  render() {
    const { name, capital, flag, region } = this.state;
    return (
      <div className="container">

        <h1>Country Selector</h1>
        <div className="row ">
          <div className="col col-6 card" style={{ width: "18rem" }}>
            <img className="card-img-top" />
            <div className="card-body">
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
} export default App;
