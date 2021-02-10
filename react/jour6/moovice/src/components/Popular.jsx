import React from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";




class Popular extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [""]
        }
    }

    componentDidMount = (movies) => {
        fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=24f4ec427a73c8c53d9cb5a30964b4d8`)
            .then((response) => response.json())
            .then((response) => {
                this.setState({
                    movies: response.movies
                }); console.log(movies)
            })

    }



    render() {
        return (
            <div className="container">
                <h1>Popular</h1>
            </div>

        );
    }
}

export default Popular;