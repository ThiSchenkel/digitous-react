import React from "react";
import "../App.css";

class Card extends React.Component {


    render() {
        return (
            <div className="row ">
                <div className="col-6 mx-auto card" style={{ width: "18rem" }}>
                    <img className=" card-img-top" title="Flag" src={this.props.country.flag} />
                    <div className="card-body">
                        <p className="card-text">Country : {this.props.country.name}</p>
                        <p className="card-text">Capital : {this.props.country.capital}</p>
                        <p className="card-text">Region : {this.props.country.region}</p>
                        <p className="card-text">Population : {this.props.country.population}</p>
                    </div>
                </div>
            </div>
        );
    }
} export default Card;