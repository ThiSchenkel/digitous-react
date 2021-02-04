import "../App.css";
import React from "react";

class List extends React.Component {

    render() {
        return (
            <div className="container">
                <ul>
                    {this.props.listItems.map(curr => {
                        return (<li>{curr.name} - {curr.price}</li>)
                    })}
                </ul>
            </div>
        );
    }
}

export default List;




