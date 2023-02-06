import React from "react";
import './Loading.css';
import { Circles } from  'react-loader-spinner'

export const Loading = (props) => {
    if (props.isLoading === true) {
        return (
            <div className="loading-container">
                <Circles
                    height="60"
                    width="60"
                    color="#DAB409"
                    ariaLabel="circles-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
                <p className="loading-text">Loading...</p>
            </div>
        )
    } else {
        return null
    }
}