import React from 'react';
class Box extends React.Component {
    render() {
        return (

            <div className="box" >
                <span className="material-icons" style={{ fontSize: 100, color: this.props.color }}>{this.props.icon}</span>
                <div className="col-sm-3" />
                <div className="col-6" />
                <p>{this.props.value && this.props.unit}</p>
            </div>
        )
    }
}
export default Box;


