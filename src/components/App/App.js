import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import SearchButtons from '../SearchButtons/SearchButtons'
import Activity from '../Activity/Activity'
import ApiError from '../ApiError/ApiError'

const App = () => {
    const [activity, setActivity] = useState(null);
    const [apiError, setApiError] = useState(false);
    const [selectedType, setSelectedType] = useState('social');

    useEffect(() => {
      fetch(`https://www.boredapi.com/api/activity?type=${selectedType}`)
      .then((response)=> {
        if (response.ok) {
          return response.json(); 
        } 
        // Not fully tested yet setApiError
        setApiError(true)
        throw new Error("Bad response - message from App.js fetch")
      })
      .then((response) => setActivity(response))
      .catch((error) => console.log(error));
    },[selectedType]) 
  
  return (
    <div >
      < Header />
      < Activity activity={activity} />
      < ApiError apiError={apiError} />
      < SearchButtons changeActivityType={activityType => setSelectedType(activityType)} />
      < Footer />
    </div>
  )
}

export default App;
