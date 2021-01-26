import React from 'react';
class Box extends React.Component {
    render() {
        return (

            <div className="box" >
                <span className="material-icons" style={{ fontSize: 100, color: "black" }}>directions_walk {this.props.icon}</span>
                <div className="col-sm-3" />
                <div className="col-6" />
            </div>
        )
    }
    constructor(props) {
        super(props);
        this.state = {
            color: this.props.color,
            p: this.props.value && this.props.unit
        }
    }
}
export default Box;


