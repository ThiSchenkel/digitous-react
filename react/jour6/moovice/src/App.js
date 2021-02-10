import React from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Weekly from "./components/Weekly";
import WeeklyBattle from "./components/WeeklyBattle";
import Popular from "./components/Popular";
import PopularBattle from "./components/PopularBattle";
import Favorites from "./components/Favorites";




class App extends React.Component {
  render() {
    return (
      <BrowserRouter>

        <nav class="navbar navbar-light bg-light">
          <div class="container-fluid">
            <Link to="/">Home</Link>


          </div>
        </nav>

      </BrowserRouter>
    );
  }
}

export default App;
