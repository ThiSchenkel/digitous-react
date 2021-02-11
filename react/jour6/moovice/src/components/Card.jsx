import React from "react";


class Card extends React.Component {

    render() {
        const { fiche } = this.props
        return (
            <div className="d-flex justify-content-center ">
                <div className="flex-row">
                    <div className="col md-6 mx-auto">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={`https://image.tmdb.org/t/p/w300/${fiche.poster_path}`} className="card-img-top" alt={`L'affiche : ${fiche.poster_path}`} />
                            <div className="card-body">
                                <h3 className="card-text">{fiche.title}</h3>
                                <p className="card-text">Sortie en {fiche.release_date}</p>
                                <p className="card-text">{fiche.overview}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Card;
