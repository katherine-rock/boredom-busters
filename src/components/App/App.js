import React, { useEffect, useState, useRef } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import SearchButtons from '../SearchButtons/SearchButtons'
import Activity from '../Activity/Activity'
import ApiError from '../ApiError/ApiError'

const App = () => {
    const [activity, setActivity] = useState(null);
    const [apiError, setApiError] = useState(false);
    const [selectedType, setSelectedType] = useState(null);
    const isInitialMount = useRef(true);

    useEffect(() => {
      if (isInitialMount.current) {
        isInitialMount.current = false
      } else {
        fetch(`https://www.boredapi.com/api/activity?type=${selectedType}`)
        .then((response)=> {
          if (response.ok) {
            return response.json(); 
          } 
        })
        .then((response) => {
          const objAsString = JSON.stringify(response)
          console.log(isInitialMount.current)
          if(objAsString.includes('error')) {
            setApiError(true)
            throw new Error(`Error from fetch request in App.js. The JSON response converted to string is: ${objAsString}`)
          } else {
            setActivity(response)
            setApiError(false)
          }
        }
        )
        .catch((error) => console.log(error));
      }},[selectedType]) 
      
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
