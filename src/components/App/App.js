import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import SearchButtons from '../SearchButtons/SearchButtons'
import Activity from '../Activity/Activity'
import ApiError from '../ApiError/ApiError'

const App = () => {
    const [activity, setActivity] = useState(null);
    const [apiError, setApiError] = useState(false);
    const [selectedType, setSelectedType] = useState('null');

// If response.json includes the string text 'error' I want to: 
// 1. throw a new error
// 2. set ApiError to true
// 3. Skip setActivity
// If I throw an error, does this then skip to the catch block?  

    useEffect(() => {
      fetch(`https://www.boredapi.com/api/activity?type=${selectedType}`)
      .then((response)=> {
        if (response.ok) {
          return response.json(); 
        } 
      })
      // This is what was working previously:
      // .then((response) => setActivity(response))
      .then((response) => {
        const objAsString = JSON.stringify(response)
        console.log(objAsString)
        if(objAsString.includes('error')) {
          setApiError(true)
        } else {
          setActivity(response)
          setApiError(false)
        }
      }
      )
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
