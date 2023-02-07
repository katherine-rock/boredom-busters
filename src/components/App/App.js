import React, { useEffect, useState, useRef } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import SearchButtons from '../SearchButtons/SearchButtons'
import { Loading } from '../Loading/Loading'
import Activity from '../Activity/Activity'
import ApiError from '../ApiError/ApiError'

const App = () => {
    const [activity, setActivity] = useState(null);
    const [apiError, setApiError] = useState(false);
    const [selectedType, setSelectedType] = useState(null);
    const [clickCount, setClickCount] = useState(0);
    const [isLoading, setIsLoading] = useState(false)
    const isInitialMount = useRef(true);

    useEffect(() => {
      // Prevents fetch request from running on first render while value of 'activity' is null because user has not clicked a button yet
      if (isInitialMount.current) {
        isInitialMount.current = false
      } else {
        fetch(`https://www.boredapi.com/api/activity?type=${selectedType}`)
        .then(setActivity(null))
        .then(setIsLoading(true))
        .then((response)=> {
          if (response.ok) {
            setIsLoading(false)
            return response.json(); 
          } 
        })
        // Check if json response contains an error message 
        .then((response) => {
          const objAsString = JSON.stringify(response)
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
      }},[selectedType, clickCount]) 
      
  return (
    <div >
      < Header />
      < Loading isLoading={isLoading} />
      < Activity activity={activity} />
      < ApiError apiError={apiError} />
      < SearchButtons 
        changeActivityType={activityType => setSelectedType(activityType)}
        increaseClickCount={() => setClickCount(clickCount + 1)} />
      < Footer />
    </div>
  )
}


export default App;
