import React from "react";
import './Activity.css';

const Activity = (props) => {

    // Capitalise the type of activity as returned by the API call
    function capitalise(string) {
        const lower = string.toLowerCase()
        return string.charAt(0).toUpperCase() + lower.slice(1) 
    }

    // if (props.activity) {
    //     return (
    //         <div className="result">
    //             <p>Activity type: {capitalise(props.activity.type)}</p>
    //             <hr/>
    //             <p>{props.activity.activity}</p>
    //         </div>
    //     )
    // } else {
    //     return null
    // }

        if (props.activity && props.activity.type === 'diy') {
            return (
                    <div className="result">
                        <p>Activity type: DIY</p>
                        <hr/>
                        <p>{props.activity.activity}</p>
                    </div>
                )
            } if (props.activity && props.activity.type !== 'diy') {
                return (
                        <div className="result">
                            <p>Activity type: {capitalise(props.activity.type)}</p>
                            <hr/>
                            <p>{props.activity.activity}</p>
                        </div>
                        )
            } else {
                return null
            }

    
}

export default Activity;