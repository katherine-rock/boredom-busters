import React from "react";
import './SearchButtons.css';

const activityType = ["Education", "Recreational", "Social", "DIY", "Charity", "Cooking", "Relaxation", "Music", "Busywork", "Random"]

const SearchButtons = () => {
    return (
        <div className="searchButtons">
        {activityType.map((type, index) => {
            return <button key={index}>{type}</button>
        })}
        </div>
    )
}

export default SearchButtons;