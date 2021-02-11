import React from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import Card from "./Card";




class Popular extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: []
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

    render() {
        return (
            <div >
                {this.state.movies.map((film, index) => {
                    return (
                        <li key={index} ><Card fiche={film} /></li>)
                })}
            </div>);
    }
}

export default Popular;