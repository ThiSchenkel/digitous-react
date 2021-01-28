import React from "react";

class Counter extends React.Component {
    render() {
        const { count, addFunction, removeFunction } = this.props;
        return (


            <div>
                <div className="row" >
                    <div className="col-md-3" >
                        <button style={{ backgroundColor: "green", borderRadius: "50%", outline: "none", width: "50px", height: "50px" }} onClick={removeFunction} />
                    </div>
                    <div className="col-md-3" >
                        <h2>{count}</h2>
                    </div>
                    <div className="col-md-3" >
                        <button style={{ backgroundColor: "red", borderRadius: "50%", outline: "none", width: "50px", height: "50px" }} onClick={addFunction} />
                    </div>
                </div>
            </div>

        )
    }
}
export default Counter;