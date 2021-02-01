import React from "react";
import logo from "./logo.svg";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <form >
          <h1>Login</h1>
          <label> Email Adress
          <input type="text" mail="mail" />
          </label>
          <label> Passeword
            <input type="text" passeword="passeword" />
          </label>
          <p>Remember Me</p>
          <input type="submit" value="Submit" />
        </form>
      </div>

    );
  }
}

export default App;