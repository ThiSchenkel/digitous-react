import React from "react";

class Counter extends React.Component {
    render() {
        const { count, addFunction, removeFunction } = this.props;
        return (


            <div>
                <div className="col-md-4" >
                    <button style={{ backgroundColor: "green", borderRadius: "50%", outline: "none", width: "50px", height: "50px" }} onClick={() => { this.props.removeFunction() }} />
                </div>
                <div className=" col-md-4" >
                    <h2>{this.props.count}</h2>
                </div>
                <div className=" col-md-4" >
                    <button style={{ backgroundColor: "red", borderRadius: "50%", outline: "none", width: "50px", height: "50px" }} onClick={() => { this.props.addFunction() }} />
                </div>
            </div>
        )
    }
}
export default Counter;