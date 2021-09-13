import React from "react";
import './Activity.css';

const result = {
    activity: "Kat's random activity to test the component",
    type: "social",
    participants: 1,
    price: 0.1,
    link: "",
    key: "1288934",
    accessibility: 0.2
}

const Activity = () => {
    return (
        <div className="result">
            <p>{result.activity}</p>
        </div>
    )
}

export default Activity;