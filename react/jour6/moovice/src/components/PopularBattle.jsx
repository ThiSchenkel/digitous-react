import React from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import Popular from "./Popular";




class PopularBattle extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            movies: [""],
            currentBattle: 0
        }
    }

    render() {
        return (
            <Popular />
            )
    }
}

export default PopularBattle;