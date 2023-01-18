import React from "react";
import './Activity.css';

const Activity = (props) => {

    const activity = {
        activity: "Kat's awesome random activity to test the component",
        type: "social",
        participants: 1,
        price: 0.1,
        link: "",
        key: "1288934",
        accessibility: 0.2,
    }

    function capitalise(string) {
        const lower = string.toLowerCase()
        return string.charAt(0).toUpperCase() + lower.slice(1) 
    }

    return (
        <div className="result">
            <p>Activity Type: {capitalise(activity.type)}</p>
            <p>{activity.activity}</p>
        </div>
    )
}

export default Activity;