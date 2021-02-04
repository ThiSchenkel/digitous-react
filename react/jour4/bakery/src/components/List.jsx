import "../App.css";
import React from "react";

class List extends React.Component {

    render() {
        return (
            <div className="container">

                <ul>
                    {this.props.pushList.map(push => (<li>{this.props.items} {this.props.price}</li>))}
                </ul>

            </div>
        );
    }
}

export default List;