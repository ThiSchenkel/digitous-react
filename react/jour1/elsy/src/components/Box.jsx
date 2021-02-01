import React from 'react';

class Box extends React.Component {
    render() {
        const { heartMin, heartMax, icon, value, onChange, tempMin, tempMax } = this.props;
        if (icon === "local_drink") {
            return (
                <div className="box col-sm-3 col-6 " >
                    <span className="material-icons" style={{ fontSize: 100, color: this.props.color }}>{icon}</span>
                    <p>{this.props.value} {this.props.unit}</p>
                </div>
            )
        } else {
            return (
                <div className="box col-sm-3 col-6 " >
                    <span className="material-icons" style={{ fontSize: 100, color: this.props.color }}>{icon}</span>
                    <p>{value} {this.props.unit}</p>
                    <input type="range" min={heartMin} max={heartMax} onInput={onChange} />
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
