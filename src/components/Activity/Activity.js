import React from "react";
import './Activity.css';

const Activity = (props) => {

    if (props.activity) {
        return (
            <div className="result">
                <p>Activity type: {props.activity.type}</p>
                <hr/>
                <p>{props.activity.activity}</p>
            </div>
        )
    } else {
        return null
    }
}

export default Activity;