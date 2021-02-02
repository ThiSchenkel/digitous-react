import React from "react";
import logo from "./logo.svg";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mailValid: false,
      mpValid: false,
      mail: "",
      mp: "",
      submitClick: false,
    }
  }

  handleChangeMail = (event) => {
    const newMail = event.target.value;
    const reg = /^\S+@\S+\.\S+$/g;
    const isMail = reg.test(newMail)
    this.setState({
      mail: newMail,
      mailValid: isMail
    })
  }

  handleChangeMp = (event) => {
    let newMp = false;
    if (event.target.value.length > 6) {
      newMp = true
    } else {
      newMp = false
    }
    this.setState({
      mp: event.target.value,
      mpValid: newMp
    })
  }

  handleChangeCheckBox = (event) => {
    event.preventDefault();
    this.setState({
      submitClick: true
    })
  }


  render() {
    if (this.state.submitClick === true) {
      return (<div className="jumbotron display-4 text-center">Form Submitted</div>)
    }
    return (
      <form className="form-group needs-validation container">
        <h1>Login</h1>

        <div className="row">
          <div className="col-8">
            <label htmlFor="email">Email Adress</label>
            <input
              type="email"
              name="email"
              className={this.state.mailValid ? "form-control is-valid" : "form-control is-invalid"}
              onChange={this.handleChangeMail}
              required />
          </div>

          <div className="col-8">
            <label >Passeword</label>
            <input
              type="passeword"
              name="passeword"
              className={this.state.mpValid ? "form-control is-valid" : "form-control is-invalid"}
              onChange={this.handleChangeMp}
              required />
          </div>

          <div className="col-8">
            <input type="checkbox" name="remember" required />
            <label >Remember Me</label>
          </div>

          <div className="col-8">
            <input type="submit" disabled={!this.state.mailValid || !this.state.mpValid} value="Submit" className="btn btn-primary" onClick={this.handleChangeCheckBox} />
          </div>
        </div>
      </form>
    );
  }
}
export default App;