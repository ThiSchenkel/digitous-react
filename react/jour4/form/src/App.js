


import React from "react";
import logo from "./logo.svg";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mail: "",
      mp: "",
      value: "",
      checked: ""
    }
  }

  handleChangeMail = (event) => {
    this.setState({
      mail: event.target.value
    })
  }

  handleChangeMp = (event) => {
    this.setState({
      mp: event.target.value
    });
  }

  handleChangeCheckBox = (event) => {
    this.setState({
      checked: event.target.checked
    })
  }

  render() {
    return (
      <div className="container">
        <form>
          <h1>Login</h1>

          <p>Email Adress</p>
          <input type="mail" mail={this.state.mail} value={this.state.mail} onChange={this.handleChangeMail} required title="Veuillez saisir une adresse mail valide" pattern="[a-zA-Z0-9._-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,4}" />

          <p>Passeword</p>
          <input type="passeword" mp={this.state.mp} value={this.state.mp} onChange={this.handleChangeMp} required title="Veuillez saisir un mot de passe 8 caractères" pattern="[0-9a-fA-F]{4,8}" minLength="8" maxLength="8" />

          <p>Remember Me</p>
          <input type="checkbox" checked={this.state.checked} value={this.state.checked} onChange={this.handleChangeCheckBox} required />

          <button className="btn btn-primary" >Submit</button>
        </form>
      </div>
    );
  }
}
export default App;