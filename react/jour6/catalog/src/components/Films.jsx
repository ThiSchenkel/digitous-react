import React from "react";


class Films extends React.Component {
    render() {
        return (
            <>
                {this.props.movies.filter((movies) => {
                    return movies.id === parseInt(this.props.match.params.id)
                })
                    .map((movies) => {
                        return (
                            <>
                                <h2>Titre : {movies.title}</h2>
                                <img src={movies.image} alt={`Affiche: ${movies.title}`} />
                                <h2>Réalisateur : {movies.director}</h2>
                                <h2> Acteurs : {movies.stars}</h2>
                                <h2>Description : {movies.description}</h2>
                            </>
                        )
                    })
                }
            </>
        )
    }
}
export default Films;