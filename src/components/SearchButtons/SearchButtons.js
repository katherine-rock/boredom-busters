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

const SearchButtons = (props) => {
    const {addResult, searchBoredAPI, chooseType} = props

    function handleSearch(event) {
        console.log("Button has been clicked. This is from the handleSearch function in the SearchButtons component.")
        chooseType(event)
        console.log(props.type)
        searchBoredAPI(props.type)
        console.log("This is props.type: ",props.type)
        event.preventDefault()
    }

    return (
        <div className="searchButtons">
        {activityType.map((activity, index) => {
            return <button onClick={handleSearch} key={index}>{activity.label}</button>
        })}
        </div>
    )
}

export default SearchButtons;