import React, { useState } from "react";
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
    const [ selectedType, setSelectedType] = useState('');
    const {addResult, searchBoredAPI, chooseType} = props

    function handleClick(event) {
        // console.log("Button has been clicked. This is from the handleClick function in the SearchButtons component.")
        // setSelectedType(event.target.value)
        // console.log('setSelectedType has been called')
        // console.log(event.target.value)
        // console.log(selectedType)
        // console.log(typeof(selectedType)) //THis is an object

        event.preventDefault()

    }

    return (
        <div>
            <div className="searchButtons">
            {activityType.map((activity, index) => {
                return (           
                <button onClick={handleClick} value={activity.type} key={index}>{activity.label}</button>
                )
            })}
            </div>
        </div>
    )
}

export default SearchButtons;