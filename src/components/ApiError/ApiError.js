import React from "react";
import './ApiError.css'

export const ApiError = (props) => {
    if (props.apiError === true) {
        return (
            <div className="ApiErrorSection">
                <p>Oh dear!</p>
                <p>The elders of the internet must be napping. They have not found an activity for you. Please try again.</p>
            </div>
        )
    } else {
        return null
    }
}

export default ApiError;
