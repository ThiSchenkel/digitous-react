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
            <Link to="/weekly">Weekly</Link>
            <Link to="/weekly-battle">Weekly Battle</Link>
            <Link to="/popular">Popular</Link>
            <Link to="/popular-battle">Popular Battle</Link>
            <Link to="/favorites">Favorites</Link>
          </div>
        </nav>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/weekly" component={Weekly} />
          <Route path="/weekly-battle" component={WeeklyBattle} />
          <Route path="/popular" component={Popular} />
          <Route path="/popular-battle" component={PopularBattle} />
          <Route path="/favorites" component={Favorites} />
        </Switch>

      </BrowserRouter>
    );
  }
}

export default App;
