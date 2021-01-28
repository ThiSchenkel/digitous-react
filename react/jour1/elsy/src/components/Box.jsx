import React from 'react';

class Box extends React.Component {
    render() {
        const noWater = this.props.water;
        const { water, heart, temperature, steps, heartMin, heartMax, icon } = this.props;
        if (icon === "local_drink") {
            return (
                <div className="box col-sm-3 col-6 " >
                    <span className="material-icons" style={{ fontSize: 100, color: this.props.color }}>{this.props.icon}</span>
                    <p>{this.props.value} {this.props.unit}</p>
                </div>
            )
        } else {
            return (
                <div className="box col-sm-3 col-6 " >
                    <span className="material-icons" style={{ fontSize: 100, color: this.props.color }}>{this.props.icon}</span>
                    <p>{this.props.value} {this.props.unit}</p>
                    {/* <input type="range" oniput={steps, this.props.value} /> */}
                    <input type="range" min={heartMin} max={heartMax} onChange={this.onHeartChange} />
                </div>
            )
        }
    }
}
export default Box;

// tempMin = -20;
// tempMax = 40;
// heartMin = 80;
// heartMax = 180;
// stepsMin = 0;
// stepsMax = 50000;
