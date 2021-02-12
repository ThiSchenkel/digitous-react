import React from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import Card from "./Card";


class PopularBattle extends React.Component {

    favoriteId = [];

    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            currentBattle: 0
        }
    }

    componentDidMount = () => {
        fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=24f4ec427a73c8c53d9cb5a30964b4d8`)
            .then((response) => response.json())
            .then((popular) => {
                console.log(popular.results)
                this.setState({
                    movies: popular.results
                })
            })
            .catch((error) => console.error(error));
    }

    onClick = (id) => {
        this.setState({
            currentBattle: this.state.currentBattle + 2
        })
        this.favoriteId.push(id)
        localStorage.setItem("favorites", JSON.stringify(this.favoriteId))
    }

    render() {
        if (this.state.movies.length === 0) {
            return (<h2>Loading</h2>)
        }
        if (this.state.currentBattle === this.state.movies.length) {
            return (<h2>Vous avez parcouru tous les films de la liste !</h2>)
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col-6" onClick={() => { this.onClick(this.state.movies[this.state.currentBattle].id) }}>
                        <Card fiche={this.state.movies[this.state.currentBattle]} />
                    </div>
                    <div className="col-6" onClick={() => { this.onClick(this.state.movies[this.state.currentBattle + 1].id) }}>
                        <Card fiche={this.state.movies[this.state.currentBattle + 1]} />
                    </div>
                </div>
            </div>

        );
    }
}

export default PopularBattle;