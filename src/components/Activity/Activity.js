import React from "react";
import './Activity.css';

const Activity = (props) => {

    return (
        <div className="result">
            <p>{props.result.damnactivity}</p>
        </div>
    )
}

export default Activity;