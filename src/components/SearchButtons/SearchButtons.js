import React from "react";
import './SearchButtons.css';

// Initial
// const activityType = [
//     "education", 
//     "recreational", 
//     "social", 
//     "diy", 
//     "charity", 
//     "cooking", 
//     "relaxation", 
//     "music", 
//     "busywork", 
//     "random"
// ]

const activityType = [
    { type: "education", label: "Education"}, 
    { type: "recreational", label: "Recreation"}, 
    { type: "social", label: "Social"}, 
    { type: "diy", label: "DIY"}, 
    { type: "charity", label: "Charity"}, 
    { type: "cooking", label: "Cooking"}, 
    { type: "relaxation", label: "Relaxation"}, 
    { type: "music", label: "Music"}, 
    { type: "busywork", label: "Busywork"},
]

const SearchButtons = () => {
    return (
        <div className="searchButtons">
        {activityType.map((activity, index) => {
            return <button key={index}>{activity.label}</button>
        })}
        </div>
    )
}

export default SearchButtons;