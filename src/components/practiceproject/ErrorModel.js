import React from "react";
import "./errormodel.css";

const ErrorModel=()=>{
    return <div className="error">
        <h3>Error Error !</h3>
        <div>
            <p>Error massage and reason</p>
        </div>
        <footer>
            <button className="butt">Close</button>
        </footer>
    </div>
}

export default ErrorModel;