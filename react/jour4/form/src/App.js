import React from "react";
import logo from "./logo.svg";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mail: "",
      passeword: "",
      value: "",
    }
  }

  handleChange = (event) => {
    console.log(event);
  }


  render() {
    return (
      <div className="container">
        <form >
          <h1>Login</h1>

          <p>Email Adress</p>
          <input type="text" mail={this.state.mail} onChange={this.handleChange} />

          <p>Passeword</p>
          <input type="text" passeword={this.state.passeword} onChange={this.handleChange} />

          <p>Remember Me</p>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default App;