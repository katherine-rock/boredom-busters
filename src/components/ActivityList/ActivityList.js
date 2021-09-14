import React from "react";
import './ActivityList.css';
import Activity from '../Activity/Activity';

const ActivityList = (props) => {
    return (
        <div class="ActivityList">
            {
            props.results.map((result, index) => {
                return <Activity result={result} key={index} />;
            })
            }
        </div>
    )
}

export default ActivityList;