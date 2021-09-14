import React from "react";
import './Activity.css';

const Activity = (props) => {

function capitalise(string) {
    const lower = string.toLowerCase()
    return string.charAt(0).toUpperCase() + lower.slice(1) 
}

    return (
        <div className="result">
            <p>Activity Type: {capitalise(props.result.type)}</p>
            <p>{props.result.activity}</p>
        </div>
    )
}

export default Activity;