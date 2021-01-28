import React from 'react';

class Box extends React.Component {
    render() {
        const noWater = this.props.water;
        const { water, heart, temperature, steps } = this.props;
        if (noWater === 0) {
            return false;
        } else {
            return (
                <div className="box col-sm-3 col-6 " >
                    <span className="material-icons" style={{ fontSize: 100, color: this.props.color }}>{this.props.icon}</span>
                    <p>{this.props.value} {this.props.unit}</p>
                    <input type="range" oniput={steps, this.props.value} />
                </div>
            )
        }
    }
}

export default Box;


