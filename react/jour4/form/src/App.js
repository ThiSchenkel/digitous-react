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
    });
    console.log(event)
  }

  handleChangeMp = (event) => {
    this.setState({
      mp: event.target.value
    });
    console.log(event)
  }

  render() {
    return (
      <div className="container">
        <form >
          <h1>Login</h1>

          <p>Email Adress</p>
          <input type="text" mail={this.state.mail} value={this.state.mail} onChange={this.handleChangeMail} />

          <p>Passeword</p>
          <input type="text" mp={this.state.mp} value={this.state.mp} onChange={this.handleChangeMp} />

          <p>Remember Me</p>
          <input type="checkbox" checked={this.state.checked} value={this.state.checked} onChange={this.handleChangeMail} />

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default App;