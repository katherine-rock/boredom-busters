import React from "react";
import './Activity.css';

const Activity = (props) => {

    const activityExists = true;

    function capitalise(string) {
        const lower = string.toLowerCase()
        return string.charAt(0).toUpperCase() + lower.slice(1) 
    }
    if (activityExists) {
    // if (activityExists) {
        return (
            <div className="result">
                <p>Activity Type: {capitalise(props.activity.type)}</p>
                <p>{props.activity.activity}</p>
            </div>
        )
    } else {
        return null
    }
}

export default Activity;