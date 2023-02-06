import React from "react";
import './SearchButtons.css';

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

const SearchButtons = (props) => {

    return (
        <div>
            <div className="searchButtons">
            {activityType.map((activity, index) => {
                return (           
                <button onClick={(event) => {props.changeActivityType(event.target.value); props.increaseClickCount() }} value={activity.type} key={index}>{activity.label}</button>
                )
            })}
            </div>
        </div>
    )
}

export default SearchButtons;